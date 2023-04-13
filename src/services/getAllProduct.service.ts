import { IService } from "../interfaces/service.interface";
import { Car } from "../models/car.repositry";

export class GetAllProductService implements IService{
    private repository:Car;
    constructor(repository:Car) { this.repository = repository;}

    async execute():Promise<any>{
        const result= await this.repository.findAllProducts()
        if(!result.length){
            throw new Error('no products found')
        }
        return result
    }
}