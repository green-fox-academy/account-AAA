export default function newTransferReducer(state = { status: '' }, action) {
  switch (action.type) {
    case 'SET_SENDER':
      return {
        ...state,
        senderDepositId: action.senderDepositId,
        senderId: action.senderId,
      };
    case 'SET_RECEIVER':
      return {
        ...state,
        receiverDepositId: action.receiverDepositId,
        receiverId: action.receiverId,
      };
    case 'SET_AMOUNT':
      return {
        ...state,
        transferAmount: action.transferAmount,
      };
    case 'POST_NEW_TRANSFER_SUCCESS':
      return {};
    case 'POST_NEW_TRANSFER_ERROR':
      return {
        ...state,
        status: 'error',
        error: action.arr,
      };
    default:
      return state;
  }
}
