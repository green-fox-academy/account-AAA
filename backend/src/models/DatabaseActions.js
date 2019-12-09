module.exports = class DatabaseActions {
  constructor(connection) {
    this.connection = connection;
  }

  // find all acounts of a user
  async getAccountsByUserId(userId) {
    try {
      const getAccountsByUserIdQuery = 'SELECT * FROM accounts WHERE userId = ?;';
      const queryResult = await this.execQuery(getAccountsByUserIdQuery, [userId]);
      return queryResult;
    } catch (error) {
      throw error;
    }
  }

  // insert new account
  async insertAccount(depositName, userId) {
    try {
      const insertAccountQuery = 'INSERT INTO accounts (depositName, userId) VALUES (?, ?);';
      const inserted = await this.execQuery(insertAccountQuery, [depositName, userId]);
      return inserted.insertId;
    } catch (error) {
      throw error;
    }
  }

  // find if an account already exist
  async findAccount(depositName) {
    try {
      const findAccountQuery = 'SELECT * FROM accounts WHERE depositName=?;';
      const queryResult = await this.execQuery(findAccountQuery, [depositName]);
      return queryResult.length !== 0;
    } catch (error) {
      throw error;
    }
  }

  async getAccountByDepositId(depositId) {
    try {
      const getAccountQuery = 'SELECT * FROM accounts WHERE id=?;';
      const queryResult = await this.execQuery(getAccountQuery, [depositId]);
      return queryResult[0];
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

  // get account name from Id
  async getAccountNameById(depositId) {
    try {
      const findAccountNameQuery = 'SELECT depositName from accounts WHERE id=?';
      const queryResult = await this.execQuery(findAccountNameQuery, [depositId]);
      return queryResult[0].depositName;
    } catch (error) {
      throw error;
    }
  }

  // get account owners id
  async getUserIdByAccount(depositId) {
    try {
      const findUserIdQuery = 'SELECT userId from accounts WHERE id=?';
      const queryResult = await this.execQuery(findUserIdQuery, [depositId]);
      return queryResult[0].userId;
    } catch (error) {
      throw error;
    }
  }

  // get all transfer records related to an account
  async getTransferRecords(depositId, userId) {
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

  // add direction and userName, accountName into transfer record
  async getTransfers(depositId, userId) {
    try {
      const transfers = await this.getTransferRecords(depositId, userId);
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

  // retrive transfer records from id
  async getTransferByTransferId(transferId) {
    try {
      const findTransferQuery = 'SELECT * FROM transferDetails WHERE transferId=?;';
      const queryResult = await this.execQuery(findTransferQuery, [transferId]);
      return queryResult[0];
    } catch (error) {
      throw error;
    }
  }

  // update balance
  async changeAccountBalance(depositId, amount, action = '+') {
    try {
      const queryString = `UPDATE accounts SET depositAmount=depositAmount${action}? WHERE id=?`;
      await this.execQuery(queryString, [amount, depositId]);
    } catch (error) {
      throw error;
    }
  }

  // check if sender's account have enough to transfer
  async validateTransfer(depositId, transferAmount) {
    try {
      const queryString = 'SELECT depositAmount FROM accounts WHERE id=?';
      const balance = await this.execQuery(queryString, [depositId]);
      return transferAmount <= balance[0].depositAmount;
    } catch (error) {
      throw error;
    }
  }

  // insert transfer record
  async insertTransfer(transferInfo) {
    try {
      const insertTransferQuery = 'INSERT INTO transferDetails (transferAmount, fromUserId, fromDepositId, toUserId, toDepositId, status, selfTransfer)'
        + 'values (?, ?, ?, ?, ?, ?, ?)';
      const inserted = await this.execQuery(insertTransferQuery, transferInfo);
      const result = await this.getTransferByTransferId(inserted.insertId);
      return result;
    } catch (error) {
      throw error;
    }
  }

  // make transfers
  async makeTransfer({
    senderDepositId, senderId, receiverDepositId, receiverId, transferAmount,
  }) {
    try {
      const isTransferValid = await this.validateTransfer(senderDepositId, transferAmount);
      if (isTransferValid) {
        const transferInfo = [transferAmount, senderId, senderDepositId, receiverId, receiverDepositId, 'done', senderId === receiverId];
        const result = await this.insertTransfer(transferInfo);
        await this.changeAccountBalance(senderDepositId, transferAmount, '-');
        await this.changeAccountBalance(receiverDepositId, transferAmount);
        return result;
      }
      throw new Error('InsufficientBalance');
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
