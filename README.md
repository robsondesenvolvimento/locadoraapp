#Projeto
- Este projeto representa uma locadora de veículos e esta sendo desenvolvido para apresentar os conhecimentos aprendidos em Node.js no curso de Pós Full stack developement JavaScript.

#Requerimentos
- Node.js 14.x.x

#Para iniciar a aplicação
- yarn start
- ou
- npm start

#Recursos
- Listar todos os clientes ( GET - http://localhost:3000/cliente )
- Pesquisar cliente pelo código ( GET - http://localhost:3000/cliente/1 )
- Adicionar um novo usuário ( POST - http://localhost:3000/cliente )
- Atualizar um usuário ( PUT - http://localhost:3000/cliente/1 )
- Dados passados no corpo do POST ou PUT
```
  {
    "nome": "Henriques Casagrande dos Santos Alves",
    "cidade": "Curitibas",
    "estado": "PRs",
    "anoNascimento": "2019-07-21"
  }
```
- Deletar um usuário ( DELETE - http://localhost:3000/cliente/1 )