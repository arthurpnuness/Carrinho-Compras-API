
import { IProduct } from '../interfaces/product.interface'
export class Car{
    private prisma:any

    constructor(prisma:any) {
        this.prisma = prisma
    }
   public async findAllProducts() { //com o método findAllProducts faço c consulta no banco de dados para buscar todos os produtos no carrinho 
    await this.prisma.$connect()
    const car = await this.prisma.products.findMany()
    if(!car){
    throw new Error ('Não foi encontrado produtos no carrinho!')
    }
    return car
    }

    async addProduct(product:IProduct) { //com o método addProduct crio o registro na table de produtos no banco de dados 
        await this.prisma.$connect()
     return await this.prisma.products.create({
            data: product
          })
    }

    async removeProduct(idCar:string) { // neste método exclui o registro correspondente na tabela de produtos no banco 
        await this.prisma.$connect()
        const car = await this.prisma.products.delete({
            where: { id: idCar }
          })
          return car
    }
}