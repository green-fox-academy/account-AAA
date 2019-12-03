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
        status: 'done',
      };
    case 'UPDATE_DISPLAY':
      return {
        ...state,
        displayName: action.displayName,
        status: 'done',
      };
    case 'POST_NEW_ACCOUNT':
      return {
        ...state,
        accounts: [...state.accounts, action.account],
        status: 'done',
      };
    default:
      return state;
  }
}
