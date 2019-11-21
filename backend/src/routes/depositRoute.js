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

  const requiredKeys = ['depositName', 'userId'];
  const missingKeys = depositRequestValidator.findMissingKeys(requiredKeys, Object.keys(req.body));
  if (missingKeys.length > 0) {
    res.status(400).send(`Missing ${missingKeys}.`);
    return;
  }

  const { depositName, userId } = req.body;
  try {
    const isNewAccountValid = !(await databaseActions.findAccount(depositName));
    if (isNewAccountValid) {
      const inserted = await databaseActions.insertAccount(depositName, userId);
      res.status(200).json({ id: inserted });
    } else {
      res.status(422).send('Duplicate account name, please use another name');
    }
  } catch (error) {
    res.status(500).send('Something went wrong, please try again later.');
  }
});

module.exports = depositRoute;
