import { IService } from "../interfaces/service.interface";
import { Car } from "../models/car.repositry";

export class GetTotalValuesProductService implements IService{
    private repository:Car;
    constructor(repository:Car) { 
        this.repository = repository;
    }

    async execute():Promise<any>  {
        const result = await this.repository.findAllProducts()
        if (!result.length){
            throw new Error('cannot find all products')
        }
        // @ts-ignore
        const total = result.reduce((acc, item) => acc + item.price , 0);
        return { products: result, valor_total: total }
    }
}