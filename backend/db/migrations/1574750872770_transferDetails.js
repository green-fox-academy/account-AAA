module.exports = {
    "up":  'INSERT INTO transferDetails(transferAmount, fromUserId, fromAccount, toUserId, toAccount, status, timeOfTransfer) '
    + 'VALUES '
    + '( 150, 2, 1, 2, 4, "pending", 5.6), '
    + '( 150, 6, 3, 2, 2, "pending", 12.9), '
    + '( 150, 3, 2, 2, 1, "pending", 1.0), '
    + '( 90, 1, 6, 3, 2, "pending", 8.0), '
    + '( 150, 4, 3, 2, 2, "pending", 12.9), '
    + '( 150, 3, 2, 7, 5, "pending", 12.9), '
    + '( 100, 2, 3, 3, 6, "done", 3.5);',
    "down": "TRUNCATE TABLE transferDetails;",
}