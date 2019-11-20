const validateAccountName = jest.fn().mockImplementation(
  (accountName) => !['Main Account', 'Saving Account', 'Investment Account'].includes(accountName),
);

module.exports = validateAccountName;
