const execQuery = require('./execQuery');

module.exports = async function getAccountsByUserId(userId) {
  try {
    const getAccountsByUserIdQuery = 'SELECT depositName FROM accounts WHERE userId = ?;';
    const result = await execQuery(getAccountsByUserIdQuery, [userId]);
    return result.map((res) => res.depositName);
  } catch (error) {
    return null;
  }
};
