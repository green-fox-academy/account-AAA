module.exports = {
  up: 'INSERT INTO transferDetails(transferAmount, fromUserId, fromDepositId, toUserId, toDepositId, status, selfTransfer) '
    + 'VALUES '
    + '( 300, 123, 1, 456, 5, "pending", 0), '
    + '( 150, 123, 1, 123, 4, "pending", 1), '
    + '( 1500, 123, 4, 123, 1, "pending", 1), '
    + '( 150, 123, 1, 456, 7, "pending", 0), '
    + '( 1500, 123, 1, 456, 8, "pending", 0), '
    + '( 300, 123, 1, 789, 10, "pending", 0), '
    + '( 50, 123, 1, 789, 13, "pending", 0), '
    + '( 48, 456, 7, 123, 1, "pending", 0), '
    + '( 60, 456, 6, 123, 1, "pending", 0), '
    + '( 50, 456, 9, 123, 1, "pending", 0), '
    + '( 48, 456, 8, 123, 4, "pending", 0), '
    + '( 60, 456, 6, 123, 4, "pending", 0), '
    + '( 20, 789, 10, 456, 7, "pending", 0), '
    + '( 10, 789, 10, 123, 1, "pending", 0), '
    + '( 1500, 789, 12, 123, 1, "pending", 0), '
    + '( 20, 789, 13, 456, 6, "pending", 0), '
    + '( 10, 789, 13, 456, 7, "pending", 0), '
    + '( 1500, 789, 12, 456, 9, "pending", 0); ',
  down: 'TRUNCATE TABLE transferDetails;',
};
