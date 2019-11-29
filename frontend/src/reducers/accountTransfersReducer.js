export default function accountTransfersReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_TRANSFERS':
      return action.transfers;
    default:
      return state;
  }
}
