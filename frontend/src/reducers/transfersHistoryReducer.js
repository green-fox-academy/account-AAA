const initState = { transfers: [], refreshing: false };

export default function transfersHistoryReducer(state = initState, action) {
  switch (action.type) {
    case 'TRANSFERS_REFRESH_START':
      return {
        ...state,
        refreshing: true,
      };
    case 'TRANSFERS_REFRESH_DONE':
      return {
        ...state,
        refreshing: false,
      };
    case 'FETCH_TRANSFERS':
      return {
        ...state,
        transfers: action.transfers,
      };
    default:
      return state;
  }
}
