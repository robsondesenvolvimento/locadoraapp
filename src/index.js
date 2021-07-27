const restapi = require('./services/restapi/RestApi');

console.log("Exemplos de requisição para cliente."); console.log();
console.log("GET - http://localhost:3000/"); console.log();
console.log("GET - http://localhost:3000/1"); console.log();
console.log("GET - http://localhost:3000/filtro/?nome=Robson");
console.log("POST - http://localhost:3000/");
var objeto = {
    "nome": "Henriques Casagrande dos Santos Alves",
    "cidade": "Curitibas",
    "estado": "PRs",
    "anoNascimento": "2019-07-21"
  };
console.log(objeto); console.log();
console.log("PUT - http://localhost:3000/2");
console.log(objeto); console.log();
console.log("DELETE - http://localhost:3000/2"); console.log();

restapi();