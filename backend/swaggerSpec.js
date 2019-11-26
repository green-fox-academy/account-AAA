const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  info: {
    title: 'JSA-Bank Peridot Deposits Server Swagger API',
    version: '1.0.0',
    description: 'Endpoints to add and retrive deposit accounts through the deposit routes',
  },
  host: 'localhost:3001',
  basePath: '/',
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header',
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'],
};

module.exports = swaggerJSDoc(options);
