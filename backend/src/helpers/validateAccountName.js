const getAccountsByUserId = require('../models/getAccountsByUserId');

module.exports = async function validateAccountName(userId, newAccountName) {
  try {
    const accounts = await getAccountsByUserId(userId);
    return !accounts.includes(newAccountName);
  } catch (error) {
    return false;
  }
};
