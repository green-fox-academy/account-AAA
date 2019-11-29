module.exports = {
  up: 'INSERT INTO users(userId, firstName, lastName) '
      + 'VALUES '
      + '(123, "Hao", "Yu"), '
      + '(456, "Arthur", "Shao"), '
      + '(789, "Cathy", "Chen");',
  down: 'TRUNCATE TABLE accounts;',
};
