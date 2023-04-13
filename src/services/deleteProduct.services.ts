import { IService } from "../interfaces/service.interface";
import { Car } from "../models/car.repositry";

export class DeleteProductService implements IService{
    private repository:Car;
    constructor(repository:Car) { 
        this.repository = repository;
    }

    async execute(id:string):Promise<any>  {
        const result = await this.repository.removeProduct(id)
        if (!result){
            throw new Error('Cannot remove product')
        }
        return result
    }
}