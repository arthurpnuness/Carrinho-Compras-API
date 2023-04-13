<h1>Carrinho de Compras API</h1>
Esta é uma API RESTful desenvolvida em Node.js e MongoDB, que permite gerenciar um carrinho de compras online. A API permite que os usuários adicionem, removam e visualizem produtos em seus carrinhos de compras.

<h2>Instalação</h2>
Para instalar a API, siga os seguintes passos:
-
<h3>Clone o repositório em seu computador</h3>
Instale as dependências do projeto com o comando npm install
Certifique-se de que o MongoDB esteja em execução na sua máquina
Execute o comando npm run dev para iniciar o servidor
Uso
A API possui três endpoints principais:
-
GET /carrinho

Este endpoint retorna o carrinho de compras atual do usuário, incluindo todos os produtos adicionados.

-
POST /carrinho/produto/:id

Este endpoint adiciona um produto ao carrinho de compras do usuário. É necessário fornecer o ID do produto na URL.

-
DELETE /carrinho/produto/:id

Este endpoint remove um produto do carrinho de compras do usuário. É necessário fornecer o ID do produto na URL.

-
Contribuição

Sinta-se à vontade para contribuir com este projeto criando issues ou pull requests. Todas as contribuições são bem-vindas!

-
Licença

Este projeto está licenciado sob a licença MIT. Leia o arquivo LICENSE para mais informações.

