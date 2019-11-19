const execQuery = require('./execQuery');

module.exports = function getAccountsByUserId(userId) {
  const accountsByUserId = new Promise((resolve, reject) => {
    try {
      const queryString = 'SELECT deposit_name FROM accounts WHERE user_id = ?;';
      resolve(execQuery(queryString, [userId]));
    } catch (error) {
      reject(error);
    }
  });
  return Promise.resolve(accountsByUserId);
};
