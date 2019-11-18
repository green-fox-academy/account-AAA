const migration = require('mysql-migrations');
const connection = require('./connection');

migration.init(connection, `${__dirname}/migrations`);
