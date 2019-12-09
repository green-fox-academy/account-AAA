
const initState = {
  accounts: [],
  displayName: '',
  status: 'pending',
};

export default function accountsReducer(state = initState, action) {
  switch (action.type) {
    case 'FETCH_ACCOUNTS':
      return {
        ...state,
        accounts: action.accounts,
      };
    case 'UPDATE_DISPLAY':
      return {
        ...state,
        displayName: action.displayName,
      };
    case 'POST_NEW_ACCOUNT_DONE':
      return {
        ...state,
        accounts: [...state.accounts, action.account],
        status: 'done',
      };
    case 'POST_NEW_ACCOUNT_ERROR':
      return {
        ...state,
        status: 'error',
      };
    case 'POST_NEW_ACCOUNT_START':
      return {
        ...state,
        status: 'pending',
      };

    default:

      return state;
  }
}
