module.exports = {
  up: 'INSERT INTO accounts(depositName, depositAmount, userId) '
      + 'VALUES '
      + '("Main Account", 3000, 123), '
      + '("Saving Account", 850, 123), '
      + '("Investment Account", 10000, 123), '
      + '("Salary", 380, 456), '
      + '("Pocket Money", 461, 456), '
      + '("Investment Account", 5000, 456), '
      + '("Stock Account", 80000, 456)',
  down: 'TRUNCATE TABLE accounts;',
};
