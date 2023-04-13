
import {Request,Response} from 'express'
import { IController } from "../interfaces/controller.interface"
import { GetAllProductService } from "../services/getAllProduct.service"

//"GetAllProductController", implementa a interface chamada "IController". A classe tem um método público chamado "handle", que trata as requisições HTTP para obter todos os produtos.

export class GetAllProductController implements IController  {

    private service: GetAllProductService

    constructor(service: GetAllProductService){
        this.service = service
    }

    async handle(req:Request,res:Response):Promise<any>{ //o handle espera dois parametros req e res
try {
    const response=await this.service.execute()
    return res.status(200).json(response)
} catch (error) {
    if(error instanceof Error){
return res.status(404).send(error) //se ocorrer algum erro, ele verifica se é uma instancia de error e retorna uma resposta com o status 404 e a mensagem de erro em caso afirmativo.
    }
}
    }
}