require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const OAuth = require('./src/MiddleWare/OAuth');
const swaggerSpec = require('./swaggerSpec');
const depositRoute = require('./src/routes/depositRoute');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/deposit', OAuth, depositRoute);

app.listen(port, () => {
  /* eslint-disable no-alert, no-console */
  console.log(`we are in port: ${port}`);
  /* eslint-enable no-alert */
});
module.exports = app;
