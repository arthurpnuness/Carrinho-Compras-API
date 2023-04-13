//aqui é onde eu defino minha interface que chamei de IService e o método execute

import { IProduct } from "./product.interface";

export interface IService{
    execute(data?:IProduct|string):Promise<any>;
}