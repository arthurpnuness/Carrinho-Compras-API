import { IProduct } from "../interfaces/product.interface";
import { IService } from "../interfaces/service.interface";
import { Car } from "../models/car.repositry";

export class CreateProductService implements IService{
    private repository:Car;
    constructor(repository:Car) { 
        this.repository =repository;
    }

   async execute(data:IProduct):Promise<IProduct|Error> {
        
    const result= await this.repository.addProduct(data);
        if(!result){
            throw new Error("Product is not added!")
    }
        return result;
        
    }
}


