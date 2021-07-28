const swaggerAutogen = require('swagger-autogen')();

const outputFile = './src/swagger/swagger_output.json';
const endpointsFiles = ['./src/services/restapi/RestApiCliente.js'];

swaggerAutogen(outputFile, endpointsFiles);