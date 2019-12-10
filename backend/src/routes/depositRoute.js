const depositRoute = require('express').Router();
const connection = require('../../db/connection');
const DatabaseActions = require('../models/DatabaseActions');
const RequestValidator = require('../services/RequestValidator');

const requestValidator = new RequestValidator();
const databaseActions = new DatabaseActions(connection);

depositRoute.post('/', async (req, res) => {
  if (!requestValidator.validateContentType(req.headers['content-type'])) {
    res.status(415).send('Content-type must be application/json.');
    return;
  }

  // validate body content
  const requiredKeys = ['depositName'];
  const missingKeys = requestValidator.findMissingKeys(requiredKeys, Object.keys(req.body));
  if (missingKeys.length > 0) {
    res.status(400).send(`Missing ${missingKeys}.`);
    return;
  }

  // post account
  try {
    const { depositName } = req.body;
    const isNewAccountValid = !(await databaseActions.findAccount(depositName));
    if (isNewAccountValid) {
      const insertedId = await databaseActions.insertAccount(depositName, req.userId);
      const insertedAccount = await databaseActions.getAccountByDepositId(insertedId);
      res.status(200).json(insertedAccount);
    } else {
      res.status(422).send({ message: 'Duplicate account name, please use another name' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Something went wrong, please try again later.' });
  }
});

depositRoute.get('/', async (req, res) => {
  try {
    const accounts = await databaseActions.getAccountsByUserId(req.userId);
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).send({ message: 'Something went wrong, please try again later.' });
  }
});

depositRoute.get('/:depositId', async (req, res) => {
  try {
    const { depositId } = req.params;
    const accountsDetails = await databaseActions.getTransfers(depositId, req.userId);
    res.status(200).json(accountsDetails);
  } catch (error) {
    res.status(500).send({ message: 'Something went wrong, please try again later.' });
  }
});

depositRoute.delete('/:depositId', async (req, res) => {
  try {
    const { depositId } = req.params;
    await databaseActions.deleteAccount(depositId);
    res.status(200).json({ depositId });
  } catch (error) {
    res.status(500).send({ message: 'Something went wrong, please try again later.' });
  }
});

module.exports = depositRoute;
