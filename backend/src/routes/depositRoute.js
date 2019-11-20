const express = require('express');

const depositRoute = express.Router();
const validateContentType = require('../helpers/validateContentType');
const validateMissingKeys = require('../helpers/validateMissingKeys');
const validateAccountName = require('../helpers/validateAccountName');
const insertAccount = require('../models/insertAccount');

depositRoute.post('/', async (req, res) => {
  if (!validateContentType(req.headers['content-type'])) {
    res.status(415).send('Content-type must be application/json.');
    return;
  }

  const missingKeys = validateMissingKeys(req.body);
  if (missingKeys.length !== 0) {
    res.status(400).send(`Missing ${missingKeys}.`);
    return;
  }

  const { depositName, userId } = req.body;
  try {
    const accountNameIsUnique = await validateAccountName(userId, depositName);
    if (accountNameIsUnique) {
      const inserted = await insertAccount(depositName, userId);
      res.status(200).json({ id: inserted });
    } else {
      res.status(422).send('Duplicate account name, please use another name');
    }
  } catch (error) {
    res.status(500).send('Something went wrong, please try again later.');
  }
});

module.exports = depositRoute;
