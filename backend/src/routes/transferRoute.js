const transferRoute = require('express').Router();
const connection = require('../../db/connection');
const DatabaseActions = require('../models/DatabaseActions');
const RequestValidator = require('../services/RequestValidator');

const requestValidator = new RequestValidator();
const databaseActions = new DatabaseActions(connection);

transferRoute.post('/', async (req, res) => {
  if (!requestValidator.validateContentType(req.headers['content-type'])) {
    res.status(415).send('Content-type must be application/json.');
    return;
  }

  // validate body content
  const requiredKeys = ['senderDepositId', 'senderId', 'receiverDepositId', 'receiverId', 'transferAmount'];
  const missingKeys = requestValidator.findMissingKeys(requiredKeys, Object.keys(req.body));
  if (missingKeys.length > 0) {
    res.status(400).send(`Missing ${missingKeys}.`);
    return;
  }

  // post transfer
  try {
    const data = await databaseActions.makeTransfer(req.body);
    res.status(200).json(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    if (error.message === 'InsufficientBalance') {
      res.status(422).send('Remaining Balance is not enough to make this transfer.');
    } else {
      res.status(500).send('Something went wrong, please try again later.');
    }
  }
});

module.exports = transferRoute;
