const execQuery = require('./execQuery');

module.exports = async function insertAccount(depositName, userId) {
  try {
    const insertAccountQuery = 'INSERT INTO accounts(depositName, userId) VALUES (?, ?);';
    const inserted = await execQuery(insertAccountQuery, [depositName, userId]);
    return inserted.insertId;
  } catch (error) {
    return null;
  }
};
