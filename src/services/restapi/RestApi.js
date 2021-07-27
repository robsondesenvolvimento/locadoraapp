const express = require("express");
const clienteRestApi = require("./RestApiCliente");
const veiculoRestApi = require("./RespApiVeiculo");
const { clientes, veiculos, locacoes } = require("../../utils/Actors")

const restapi = () => {
  const app = express();
  const port = 3000;

  app.use(express.json());

  //console.log(clientes);
  //console.log(veiculos);
  //console.log(locacoes);

  clienteRestApi(app, "/cliente", clientes);
  veiculoRestApi(app, "/veiculo");

  app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
  });
};

module.exports = restapi;