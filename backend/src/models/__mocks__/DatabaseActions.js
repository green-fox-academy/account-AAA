const DatabaseActions = jest.fn().mockImplementation(() => ({
  insertAccount: () => 1,
  getAccountsByUserId: () => '',
  findAccount: (accountName) => ['Main Account', 'Saving Account', 'Investment Account'].includes(accountName),
}));

module.exports = DatabaseActions;
