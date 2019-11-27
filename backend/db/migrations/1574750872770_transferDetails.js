module.exports = {
  up: 'INSERT INTO transferDetails(transferAmount, fromUserId, fromDepositId, toUserId, toDepositId, status) '
    + 'VALUES '
    + '( 150, 123, 1, 2, 4, "pending"), '
    + '( 150, 123, 3, 2, 2, "pending"), '
    + '( 150, 3, 2, 2, 1, "pending"), '
    + '( 90, 1, 6, 123, 2, "pending"), '
    + '( 150, 4, 3, 123, 2, "pending"), '
    + '( 150, 3, 2, 123, 5, "pending"), '
    + '( 100, 2, 3, 123, 6, "done");',
  down: 'TRUNCATE TABLE transferDetails;',
};
