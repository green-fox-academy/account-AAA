module.exports = {
  up: 'INSERT INTO accounts(depositName, userId) '
      + 'VALUES '
      + '("Main Account", 123), '
      + '("Saving Account", 123), '
      + '("Investment Account", 123); ',
  down: 'TRUNCATE TABLE accounts;',
};
