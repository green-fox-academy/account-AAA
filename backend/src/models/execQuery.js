const connection = require('../../db/connection');

module.exports = function execQuery(sqlString, queryInput = null) {
  return new Promise((resolve, reject) => {
    connection.query(sqlString, queryInput, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  });
};
