module.exports = {
  up: 'INSERT INTO accounts(deposit_name, user_id) '
      + 'VALUES '
      + '("Main Account", 123), '
      + '("Saving Account", 123), '
      + '("Investment Account", 123); ',
  down: 'TRUNCATE TABLE accounts;',
};
