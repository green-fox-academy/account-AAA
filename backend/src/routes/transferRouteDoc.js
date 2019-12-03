
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
<<<<<<< HEAD
 *             - senderId
 *             - receiverDepositId
 *             - receiverId
=======
 *             - receiverDepositId
>>>>>>> code(JSAP-12): transfer backend done
 *             - transferAmount
 *           properties:
 *             senderDepositId:
 *               type: number
<<<<<<< HEAD
 *             senderId:
 *               type: number
 *             receiverDepositId:
 *               type: number
 *             receiverId:
 *               type: number
=======
 *             receiverDepositId:
 *               type: number
>>>>>>> code(JSAP-12): transfer backend done
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
