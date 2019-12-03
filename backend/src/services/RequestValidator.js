module.exports = class DepositRequestValidator {
  validateContentType(contentType) {
    return contentType === 'application/json';
  }

  findMissingKeys(requiredKeys, currentKeys) {
    return requiredKeys.filter((key) => !currentKeys.includes(key)).join(' and ');
  }
};
