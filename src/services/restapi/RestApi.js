const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const restapi = () => {  
  const app = express();
  const port = 3000;

  const options = {
    definition: {
      //openapi: '3.0.0',
      info: {
        description: 'Sistema de locadora de veículos desenvolvido em Node.js o módulo de Node no curso de Pós graduação Full Stack Developement Javascript.',
        title: 'Locadora de veículos',
        version: '1.0.0',
        contact: {
          name: "Robson Candido dos Santos Alves",
          url:"https://www.robsonalves.dev.br",
          email: "contato@robsonalves.dev.br"
        }        
      },
      servers: [
        {
          url: "http://localhost:3000/",
        }
      ],
      host: `localhost:${port}`,
      basePath: "/",
      swagger: "2.0",
      //schemes: ['http', 'https'],
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
    explorer: true,
    apis: ['./src/services/restapi/RestApiCliente.js'], // files containing annotations as above
  };
  
  const openapiSpecification = swaggerJsdoc(options);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

  app.use(express.json());

  const rotasCliente = require("./RestApiCliente");
  app.use('/', rotasCliente)

  app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
    console.log(`Documentation swagger at http://localhost:${port}/api-docs`);
  });
};

module.exports = restapi;