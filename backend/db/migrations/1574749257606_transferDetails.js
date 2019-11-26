module.exports = {
  up: 'CREATE TABLE IF NOT EXISTS transferDetails ('
    + 'transferId INT PRIMARY KEY AUTO_INCREMENT, '
    + 'transferAmount INT,'
    + 'fromUserId INT,'
    + 'fromDepositId INT,'
    + 'toUserId INT,'
    + 'toDepositId INT,'
    + 'status VARCHAR(255),'
    + 'timeOfTransfer FLOAT DEFAULT 0);',
  down: 'DROP TABLE transferDetails;',
};
