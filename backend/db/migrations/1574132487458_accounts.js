module.exports = {
  up: 'CREATE TABLE IF NOT EXISTS accounts ('
      + 'id INT PRIMARY KEY AUTO_INCREMENT, '
      + 'depositName VARCHAR(255) NOT NULL, '
      + 'depositAmount BIGINT DEFAULT 0, '
      + 'userId INT,'
      + 'interestRate FLOAT DEFAULT 0,'
      + 'createdAt timestamp);',
  down: 'DROP TABLE accounts;',
};
