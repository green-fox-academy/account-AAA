const migration = require('mysql-migrations');
const fs = require('fs');
const connection = require('./connection');

const migrations = `${__dirname}/migrations`;

if (!fs.existsSync(migrations)) {
  fs.mkdirSync(migrations);
}
migration.init(connection, migrations);
