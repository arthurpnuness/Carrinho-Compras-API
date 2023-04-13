//aqui é onde eu defino minha interface que chamei de IController e o método handle
import {Request,Response} from 'express'
export interface IController{
    handle(req:Request,res:Response):Promise<any>;
}