import { Request, Response, Router } from "express";
import { PrismaClient } from '@prisma/client';
import { Car } from "../models/car.repositry";
import { CreateProductService } from "../services/createProduct.sevice";
import { DeleteProductService } from "../services/deleteProduct.services";
import { GetAllProductService } from "../services/getAllProduct.service";
import { GetTotalValuesProductService } from "../services/getTotalValuesProduct.service";
import { CreateProductController } from "../controllers/createProduct.controller";
import { DeleteProductController } from "../controllers/deleteProduct.controller";
import { GetAllProductController } from "../controllers/getAllProduct.controller";
import { GetTotalValuesProductController } from "../controllers/getTotalValue.controller";

export const prisma = new PrismaClient();
const repository= new Car(prisma)
const createService=new CreateProductService(repository)
const deleteService=new DeleteProductService(repository)
const getAllService=new GetAllProductService(repository)
const getTotalService=new GetTotalValuesProductService(repository)
const createController=new CreateProductController(createService)
const deleteController=new DeleteProductController(deleteService)
const getAllController=new GetAllProductController(getAllService)
const getTotalController=new GetTotalValuesProductController(getTotalService)
const router = Router();

// Rota para listar todos os itens do carrinho
router.get('/car', (req: Request, res: Response) => getAllController.handle(req, res));

// Rota para adicionar um item ao carrinho
router.post('/car', (req: Request, res: Response) =>createController.handle (req, res))
  
// Rota para remover um item do carrinho pelo ID
router.delete('/car/:id', (req: Request, res: Response) =>deleteController.handle(req, res)) 

// Rota para buscar o valor total dos produtos no carrinho
router.get('/car/total', (req: Request, res: Response) =>getTotalController.handle(req, res))

export  default router