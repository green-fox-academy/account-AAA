require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER_NAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

connection.getConnection((err, con) => {
  if (err) {
    /* eslint-disable no-alert, no-console */
    console.error('Error: check database connection.');
    /* eslint-enable no-alert */
  }
  if (con) {
    con.release();
  }
});

module.exports = connection;
