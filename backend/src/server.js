require('dotenv').config();
let express = require('express');
let routes = require('./routes/routes');
let app = express();
const port = process.env.PORT;
app.use(express.json());
app.use('/deposit', routes);

app.listen(port, () => {
    /* eslint-disable no-alert, no-console */
      console.log(`we are in port: ${port}`);
    /* eslint-enable no-alert */
    });
