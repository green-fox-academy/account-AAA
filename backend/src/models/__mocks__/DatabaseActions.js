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
}));

module.exports = DatabaseActions;
