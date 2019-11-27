const DatabaseActions = jest.fn().mockImplementation(() => ({
  insertAccount: () => 1,
  findAccount: (accountName) => ['Main Account', 'Saving Account', 'Investment Account'].includes(accountName),
  getAccountsByUserId: () => [
    {
      id: 1,
      depositName: 'Main Account',
      depositAmount: 0,
      interestRate: 0,
    },
    {
      id: 2,
      depositName: 'Saving Account',
      depositAmount: 0,
      interestRate: 0,
    },
    {
      id: 3,
      depositName: 'Investment Account',
      depositAmount: 0,
      interestRate: 0,
    },
  ],
  getAccountDetails: () => [
    {
      "transferId": 2,
      "transferAmount": 150,
      "fromUserId": 123,
      "fromDepositId": 3,
      "toUserId": 456,
      "toDepositId": 6,
      "status": "pending",
      "timeOfTransfer": "2019-11-27T06:59:59.000Z"
  },
  ],

}));

module.exports = DatabaseActions;
