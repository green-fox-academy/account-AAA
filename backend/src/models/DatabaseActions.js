module.exports = class DatabaseActions {
  constructor(connection) {
    this.connection = connection;
  }

  async insertAccount(depositName, userId) {
    try {
      const insertAccountQuery = 'INSERT INTO accounts (depositName, userId) VALUES (?, ?);';
      const inserted = await this.execQuery(insertAccountQuery, [depositName, userId]);
      return inserted.insertId;
    } catch (error) {
      throw error;
    }
  }

  async getAccountsByUserId(userId) {
    try {
      const getAccountsByUserIdQuery = 'SELECT id, depositName, depositAmount, interestRate FROM accounts WHERE userId = ?;';
      const queryResult = await this.execQuery(getAccountsByUserIdQuery, [userId]);
      return queryResult;
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

  async getUserNameById(userId) {
    try {
      const findFullNameQuery = 'SELECT CONCAT(firstName,  " ", lastName) AS fullName from users WHERE userId=?';
      const queryResult = await this.execQuery(findFullNameQuery, [userId]);
      return queryResult[0].fullName;
    } catch (error) {
      throw error;
    }
  }

  async getAccountNameById(depositId) {
    try {
      const findAccountNameQuery = 'SELECT depositName from accounts WHERE id=?';
      const queryResult = await this.execQuery(findAccountNameQuery, [depositId]);
      return queryResult[0].depositName;
    } catch (error) {
      throw error;
    }
  }

  async getAccountDetails(depositId, userId) {
    try {
      const findAccountDetailsQuery = 'SELECT * FROM transferDetails WHERE (fromDepositId = ? AND fromUserId = ? )'
      + ' OR (toDepositId = ? AND toUserId = ? ) ;';
      const queryResult = await this.execQuery(findAccountDetailsQuery,
        [depositId, userId, depositId, userId]);
      return queryResult;
    } catch (error) {
      throw error;
    }
  }

  async getTransfers(depositId, userId) {
    try {
      const transfers = await this.getAccountDetails(depositId, userId);
      // eslint-disable-next-line no-restricted-syntax
      for (const transfer of transfers) {
        transfer.direction = (parseInt(depositId) === transfer.toDepositId
          ? 'from'
          : 'to');
        const idToUse = transfer[`${transfer.direction}${transfer.selfTransfer ? 'DepositId' : 'UserId'}`];
        if (transfer.selfTransfer) {
          transfer.nameToUse = await this.getAccountNameById(idToUse);
        } else {
          transfer.nameToUse = await this.getUserNameById(idToUse);
        }
      }
      return transfers;
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
