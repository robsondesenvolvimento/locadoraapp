const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require("../../swagger/swagger_output.json");
const router = express.Router();

const restapi = () => {  
  const app = express();
  const port = 3000;

  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

  app.use(express.json());

  const rotasCliente = require("../restapi/RestApiCliente");
  app.use('/', rotasCliente)

  app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
    console.log(`Documentation swagger at http://localhost:${port}/docs`);
  });
};

module.exports = restapi;