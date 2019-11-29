const initState = {
  accounts: [],
  displayName: '',
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
    default:
      return state;
  }
}
