module.exports = class DatabaseActions {
  constructor(connection) {
    this.connection = connection;
  }

  async insertAccount(depositName, userId) {
    try {
      const insertAccountQuery = 'INSERT INTO accounts (depositName, userId) VALUES (?, ?);';
      const inserted = await this.execQuery(insertAccountQuery, [depositName, userId]);
      return {
        result: inserted.insertId,
      };
    } catch (error) {
      throw error;
    }
  }

  async getAccountsByUserId(userId) {
    try {
      const getAccountsByUserIdQuery = 'SELECT depositName FROM account WHERE userId = ?;';
      const queryResult = await this.execQuery(getAccountsByUserIdQuery, [userId]);
      return {
        result: queryResult.map((res) => res.depositName),
      };
    } catch (error) {
      throw error;
    }
  }

  async findAccount(depositName) {
    try {
      const findAccountQuery = 'SELECT * FROM accounts WHERE depositName=?;';
      const queryResult = await this.execQuery(findAccountQuery, [depositName]);
      return queryResult.length !== 0;
    } catch (error) {
      throw error;
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
