require('dotenv').config();
const express = require('express');
const depositRoute = require('./src/routes/depositRoute');

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use('/deposit', depositRoute);

app.listen(port, () => {
  /* eslint-disable no-alert, no-console */
  console.log(`we are in port: ${port}`);
  /* eslint-enable no-alert */
});
module.exports = app;
