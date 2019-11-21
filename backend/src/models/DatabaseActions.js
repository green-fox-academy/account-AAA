module.exports = class DatabaseActions {
  constructor(connection) {
    this.connection = connection;
  }

  async insertAccount(depositName, userId) {
    try {
      const insertAccountQuery = 'INSERT INTO accounts(depositName, userId) VALUES (?, ?);';
      const inserted = await this.execQuery(insertAccountQuery, [depositName, userId]);
      return inserted.insertId;
    } catch (error) {
      return null;
    }
  }

  async getAccountsByUserId(userId) {
    try {
      const getAccountsByUserIdQuery = 'SELECT depositName FROM accounts WHERE userId = ?;';
      const result = await this.execQuery(getAccountsByUserIdQuery, [userId]);
      return result.map((res) => res.depositName);
    } catch (error) {
      return null;
    }
  }

  async findAccount(depositName) {
    try {
      const findAccountQuery = 'SELECT * FROM accounts WHERE depositName=?;';
      const result = await this.execQuery(findAccountQuery, [depositName]);
      return result.length !== 0;
    } catch (error) {
      return null;
    }
  }

  execQuery(sqlString, queryInput = null) {
    return new Promise((resolve, reject) => {
      this.connection.query(sqlString, queryInput, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }
};
