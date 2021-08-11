const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const configuration = require('../config/configuration');

const restapi = () => {
  const app = express();
  const { host } = configuration.express;
  const { port } = configuration.express;

  const options = {
    definition: {
      info: {
        description:
          'Sistema de locadora de veículos desenvolvido em Node.js o módulo de Node no curso de Pós graduação Full Stack Developement Javascript.',
        title: 'Locadora de veículos',
        version: '1.0.0',
        contact: {
          name: 'Robson Candido dos Santos Alves',
          url: 'https://www.robsonalves.dev.br',
          email: 'contato@robsonalves.dev.br',
        },
      },
      servers: [
        {
          url: `http://${host}:${port}/`,
        },
      ],
      host: `${host}:${port}`,
      basePath: '/',
      swagger: '2.0',
      //schemes: ['http', 'https'],
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
    explorer: true,
    apis: [
      './src/controllers/RestApiCliente.js',
      './src/controllers/RestApiLocadora.js',
      './src/controllers/RestApiVeiculo.js',
    ],
  };

  const openapiSpecification = swaggerJsdoc(options);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

  app.use(express.json());

  const routing = require('../routers/Routers');
  app.use('/', routing);

  app.listen(port, () => {
    console.log(`app listening at http://${host}:${port}/`);
    console.log(`Documentation swagger at http://${host}:${port}/api-docs`);
  });
};

module.exports = restapi;
