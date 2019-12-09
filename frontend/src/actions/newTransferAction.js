const setSenderAction = (senderDepositId, senderId) => ({
  type: 'SET_SENDER',
  senderDepositId,
  senderId,
});

const setReceiverAction = (receiverDepositId, receiverId) => ({
  type: 'SET_RECEIVER',
  receiverDepositId,
  receiverId,
});

const setTransferAmountAction = (transferAmount) => ({
  type: 'SET_AMOUNT',
  transferAmount,
});

export { setSenderAction, setReceiverAction, setTransferAmountAction };
