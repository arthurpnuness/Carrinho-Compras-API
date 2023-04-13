import {Request,Response} from 'express'
import { CreateProductService } from "../services/createProduct.sevice";
import { IController } from '../interfaces/controller.interface';

//"CreateProductController", implementa a interface chamada "IController". A classe tem um método público chamado "handle", que trata as requisições HTTP para criar um novo produto.

export class CreateProductController implements IController  {

    private service: CreateProductService

    constructor(service: CreateProductService){
        this.service = service
    }

    async handle(req:Request,res:Response):Promise<any>{ //o handle espera dois parametros req e res
try {
    const newProduct= req.body
    if(Object.values(newProduct).includes('')){
        throw new Error('Product is not added!')
    }
    const service= await this.service.execute(newProduct)
    if(service){
        return res.status(200).json(service)
    }
} catch (error) {
    if(error instanceof Error){
        return res.status(400).send(error) //se ocorrer algum erro, ele verifica se é uma instancia de error e retorna uma resposta com o status 400 e a mensagem de erro em caso afirmativo.
    }
}
    }
}