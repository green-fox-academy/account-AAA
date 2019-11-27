
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

/**
 * @swagger
 * /depositId:
 *   get:
 *     tags:
 *       - depositId
 *     name: Retrive deposit accounts
 *     summary: Retrive all the transaction after we input depositId
 *     security:
 *       - bearerAuth: []
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *         description: User found and deposit transaction sent back successfully
 *       '415':
 *         description: No auth token provided or provides token is not of Bearer type
 *       '401':
 *         description: Provided token is invalid
 *       '500':
 *         description: DB problems
 */
