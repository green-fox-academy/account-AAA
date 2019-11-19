module.exports = {
  up: 'CREATE TABLE IF NOT EXISTS accounts ('
      + 'id INT PRIMARY KEY AUTO_INCREMENT, '
      + 'deposit_name VARCHAR(255) NOT NULL, '
      + 'deposit_amount BIGINT DEFAULT 0, '
      + 'user_id INT);',
  down: 'DROP TABLE accounts;',
};
