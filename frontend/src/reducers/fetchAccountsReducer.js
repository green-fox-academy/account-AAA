export default function fetchOptionsReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_ACCOUNTS':
      return action.accounts;
    default:
      return state;
  }
}
