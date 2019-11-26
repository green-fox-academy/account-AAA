const depositRoute = require('express').Router();
const connection = require('../../db/connection');
const DatabaseActions = require('../models/DatabaseActions');
const DepositRequestValidator = require('../services/DepositRequestValidator');

const databaseActions = new DatabaseActions(connection);
const depositRequestValidator = new DepositRequestValidator();

/**
 * @swagger
 * /deposit:
 *   post:
 *     tags:
 *       - Deposits
 *     name: Create Deposit Account
 *     summary: reate a new account under the caller user
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: depositName
 *         description: Name of deposit account to be created.
 *         schema:
 *           type: object
 *           required:
 *             - depositName
 *           properties:
 *             depositName:
 *               type: string
 *     responses:
 *       '200':
 *         description: User found and deposit account created successfully
 *       '401':
 *         description: Provided token is invalid
 *       '415':
 *         description: No auth token provided or provides token is not of Bearer type
 *       '422':
 *         description: Duplicate depositName
 *       '500':
 *         description: DB problems
 */

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
      const inserted = await databaseActions.insertAccount(depositName, req.userId);
      res.status(200).json({ id: inserted });
    } else {
      res.status(422).send('Duplicate account name, please use another name');
    }
  } catch (error) {
    res.status(500).send('Something went wrong, please try again later.');
  }
});

/**
 * @swagger
 * /deposit:
 *   get:
 *     tags:
 *       - Deposits
 *     name: Retrive deposit accounts
 *     summary: Retrive all deposit accounts under callers Id
 *     security:
 *       - bearerAuth: []
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *         description: User found and deposit account sent back successfully
 *       '415':
 *         description: No auth token provided or provides token is not of Bearer type
 *       '401':
 *         description: Provided token is invalid
 *       '500':
 *         description: DB problems
 */

depositRoute.get('/', async (req, res) => {
  try {
    const accounts = await databaseActions.getAccountsByUserId(req.userId);
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).send('Something went wrong, please try again later.');
  }
});

module.exports = depositRoute;
