require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
/* eslint-disable no-alert, no-console */
  console.log(`we are in port: ${port}`);
/* eslint-enable no-alert */
});
