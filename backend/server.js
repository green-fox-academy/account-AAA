require('dotenv').config();
const express = require('express');
const OAuth = require('./src/MiddleWare/OAuth');
const depositRoute = require('./src/routes/depositRoute');

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use('/deposit', OAuth, depositRoute);

app.listen(port, () => {
  /* eslint-disable no-alert, no-console */
  console.log(`we are in port: ${port}`);
  /* eslint-enable no-alert */
});
module.exports = app;
