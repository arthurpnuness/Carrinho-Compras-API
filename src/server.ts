import express from "express";
import cors from "cors";
import router from "./route/routes";

const api = express();
const port = 8081;

// configurando middlewares e rotas.
api.use(express.json());
api.use(cors());

api.get('/', (req, res) => {
  res.send('<h1>Carrinho compras API</h1>')
})

//incluindo as rotas definidas no objeto router na aplicação.
api.use(router)

// Inicia o servidor e define a porta em que o aplicativo irá escutar as solicitações HTTP 
api.listen(port, () => {
    console.log(`API running on port ${port}`);
  });
