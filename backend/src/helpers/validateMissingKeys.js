module.exports = function validateMissingKeys({ depositName, userId }) {
  let missingKeys = '';
  missingKeys += !depositName
    ? ' Deposit Name'
    : '';

  missingKeys += !userId
    ? ' User Id'
    : '';

  return missingKeys;
};
