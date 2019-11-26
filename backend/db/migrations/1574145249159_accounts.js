module.exports = {
  up: 'INSERT INTO accounts(depositName, userId) '
      + 'VALUES '
      + '("Main Account", 123), '
      + '("Saving Account", 123), '
      + '("Investment Account", 123), '
      + '("Salary", 456), '
      + '("Pocket Money", 456), '
      + '("Investment Account", 456), '
      + '("Stock Account", 456)',
  down: 'TRUNCATE TABLE accounts;',
};
