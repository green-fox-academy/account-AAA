export default function transfersHistoryReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_TRANSFERS':
      return action.transfers.reverse();
    default:
      return state;
  }
}
