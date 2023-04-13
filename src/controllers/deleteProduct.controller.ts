import {Request,Response} from 'express'

import { IController } from "../interfaces/controller.interface"
import { DeleteProductService } from '../services/deleteProduct.services'

//"DeleteProductController", implementa a interface chamada "IController". A classe tem um método público chamado "handle", que trata as requisições HTTP para excluir um produto.

export class DeleteProductController implements IController  {

    private service: DeleteProductService

    constructor(service: DeleteProductService){
        this.service = service
    }

    async handle(req:Request,res:Response):Promise<any>{//o handle espera dois parametros req e res 
try {
    const id=req.params.id as string
    const response= await this.service.execute(id)
    if(!response) throw new Error('not found product')
    return res.status(200).json({ data:response, message: `Item removido do carrinho com sucesso` });
} catch (error) {

if(error instanceof Error) {
    return res.status(404).send(error) //se ocorrer algum erro, ele verifica se é uma instancia de error e retorna uma resposta com o status 404 e a mensagem de erro em caso afirmativo.
}
    
}
    }
}