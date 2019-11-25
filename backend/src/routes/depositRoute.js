const depositRoute = require('express').Router();
const connection = require('../../db/connection');
const DatabaseActions = require('../models/DatabaseActions');
const DepositRequestValidator = require('../services/DepositRequestValidator');

const databaseActions = new DatabaseActions(connection);
const depositRequestValidator = new DepositRequestValidator();

depositRoute.post('/', async (req, res) => {
  if (!depositRequestValidator.validateContentType(req.headers['content-type'])) {
    res.status(415).send('Content-type must be application/json.');
    return;
  }

  // validate body content
  const requiredKeys = ['depositName'];
  const missingKeys = depositRequestValidator.findMissingKeys(requiredKeys, Object.keys(req.body));
  if (missingKeys.length > 0) {
    res.status(400).send(`Missing ${missingKeys}.`);
    return;
  }

  // post account
  try {
    const { depositName } = req.body;
    const isNewAccountValid = !(await databaseActions.findAccount(depositName));
    if (isNewAccountValid) {
      const inserted = await databaseActions.insertAccount(depositName, res.locals.userId.userId);
      res.status(200).json({ id: inserted });
    } else {
      res.status(422).send('Duplicate account name, please use another name');
    }
  } catch (error) {
    res.status(500).send('Something went wrong, please try again later.');
  }
});

depositRoute.get('/', async (req, res) => {
  try {
    const accounts = await databaseActions.getAccountsByUserId(res.locals.userId.userId);
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).send('Something went wrong, please try again later.');
  }
});


module.exports = depositRoute;
