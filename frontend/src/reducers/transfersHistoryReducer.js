export default function transfersHistoryReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_TRANSFERS':
      return action.transfers;
    default:
      return state;
  }
}
