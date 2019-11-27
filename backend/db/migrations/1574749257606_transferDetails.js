module.exports = {
  up: 'CREATE TABLE IF NOT EXISTS transferDetails ('
    + 'transferId INT PRIMARY KEY AUTO_INCREMENT, '
    + 'transferAmount INT,'
    + 'fromUserId INT,'
    + 'fromDepositId INT,'
    + 'toUserId INT,'
    + 'toDepositId INT,'
    + 'status VARCHAR(255),'
    + 'timeOfTransfer timestamp);',
  down: 'DROP TABLE transferDetails;',
};
