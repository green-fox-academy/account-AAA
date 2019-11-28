export default function fetchAccountsReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_ACCOUNTS':
      return action.accounts;
    default:
      return state;
  }
}
