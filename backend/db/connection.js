require('dotenv').config();

const mysql = require('mysql');

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER_NAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

connection.getConnection((err) => {
  if (err) throw err;
});

module.exports = connection;
