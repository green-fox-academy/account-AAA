module.exports = {
  up: 'INSERT INTO accounts(depositName, depositAmount, userId) '
    + 'VALUES '
    + '("Main Account", 0, 123), '
    + '("Saving Account", 80050, 123), '
    + '("Investment Account", 10000, 123), '
    + '("Travel Account", 10, 123), '
    + '("Christmas Account", 1, 123), '
    + '("Salary", 380, 456), '
    + '("Pocket Money", 461, 456), '
    + '("Investment Account", 5000, 456), '
    + '("Stock Account", 80000, 456),'
    + '("Salary", 380, 789), '
    + '("Pocket Money", 461, 789), '
    + '("Investment Account", 5000, 789), '
    + '("Stock Account", 80000, 789);',
  down: 'TRUNCATE TABLE accounts;',
};
