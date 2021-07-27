const express = require("express");
const clienteRestApi = require("./RestApiCliente");
const veiculoRestApi = require("./RespApiVeiculo");

const restapi = () => {
  const app = express();
  const port = 3000;

  app.use(express.json());

  clienteRestApi(app, "/cliente");
  veiculoRestApi(app, "/veiculo");

  app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
  });
};

module.exports = restapi;