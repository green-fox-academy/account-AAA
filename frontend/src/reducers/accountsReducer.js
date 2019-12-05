
const initState = {
  accounts: [],
  displayName: '',
  status: '',
};

export default function accountsReducer(state = initState, action) {
  switch (action.type) {
    case 'FETCH_ACCOUNTS':

      return {
        ...state,
        accounts: action.accounts,
        status: 'pending',
      };
    case 'UPDATE_DISPLAY':

      return {
        ...state,
        displayName: action.displayName,
        status: 'pending',
      };
    case 'POST_NEW_ACCOUNT':

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
    case 'START_A_NEW_PAGE':

      return {
        ...state,
        status: '',
      };

    default:

      return state;
  }
}
