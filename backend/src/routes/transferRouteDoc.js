
/**
 * @swagger
 * /deposit/transfer:
 *   post:
 *     tags:
 *       - Transfers
 *     name: Init transfer between account
 *     summary: Create a new transfer
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: transferInfo
 *         description: necessary information for transfer to be created.
 *         schema:
 *           type: object
 *           required:
 *             - senderDepositId
 *             - senderId
 *             - receiverDepositId
 *             - receiverId
 *             - transferAmount
 *           properties:
 *             senderDepositId:
 *               type: number
 *             senderId:
 *               type: number
 *             receiverDepositId:
 *               type: number
 *             receiverId:
 *               type: number
 *             transferAmount:
 *               type: number
 *     responses:
 *       '200':
 *         description: User found and deposit account created successfully
 *       '401':
 *         description: Provided token is invalid
 *       '415':
 *         description: No auth token provided or provides token is not of Bearer type
 *       '422':
 *         description: Insufficient balance to make the transfer
 *       '500':
 *         description: DB problems
 */
