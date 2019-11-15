require('dotenv').config();
const express = require('express');
const routes = require('./routes/routes');

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use('/deposit', routes);

app.listen(port, () => {
  /* eslint-disable no-alert, no-console */
  console.log(`we are in port: ${port}`);
  /* eslint-enable no-alert */
});
