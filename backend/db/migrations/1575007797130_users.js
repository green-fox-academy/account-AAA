module.exports = {
  up: 'CREATE TABLE IF NOT EXISTS users ('
    + 'userId INT PRIMARY KEY, '
    + 'firstName VARCHAR(255), '
    + 'lastName VARCHAR(255));',
  down: 'DROP TABLE users;',
};
