module.exports = {
  up: 'INSERT INTO transferDetails(transferAmount, fromUserId, fromDepositId, toUserId, toDepositId, status, selfTransfer) '
    + 'VALUES '
    + '( 300, 123, 1, 456, 5, "pending", 0), '
    + '( 150, 123, 1, 123, 4, "pending", 1); ',
  down: 'TRUNCATE TABLE transferDetails;',
};
