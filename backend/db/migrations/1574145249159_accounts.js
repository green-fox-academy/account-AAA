module.exports = {
  up: 'INSERT INTO accounts(depositName, depositAmount, userId, interestRate) '
    + 'VALUES '
    + '("Main Account", 0, 123, 1.5), '
    + '("Saving Account", 80050, 123, 3.5), '
    + '("Salary", 380, 456, 1.5), '
    + '("Pocket Money", 461, 456, 1.5), '
    + '("Investment Account", 5000, 456, 8.6), '
    + '("Salary", 380, 789, 1.5), '
    + '("Pocket Money", 461, 789, 1.5), '
    + '("Investment Account", 5000, 789, 9.4); ',
  down: 'TRUNCATE TABLE accounts;',
};
