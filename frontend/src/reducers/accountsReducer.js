
const initState = {
  accounts: [],
  displayName: '',
  status: 'pending',
};

const orderResult = {
  'Account Name Ascending': (accounts) => accounts.sort((a, b) => ((a.depositName < b.depositName) ? 1 : -1)),
  'Account Name Descending': (accounts) => accounts.sort((a, b) => ((a.depositName > b.depositName) ? 1 : -1)),
  'Balance Ascending': (accounts) => accounts.sort((a, b) => ((a.depositAmount < b.depositAmount) ? 1 : -1)),
  'Balance Descending': (accounts) => accounts.sort((a, b) => ((a.depositAmount > b.depositAmount) ? 1 : -1)),
  'Created Ascending': (accounts) => accounts.sort((a, b) => ((a.createdAt < b.createdAt) ? 1 : -1)),
  'Created Descending': (accounts) => accounts.sort((a, b) => ((a.createdAt > b.createdAt) ? 1 : -1)),
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
    case 'ORDER_CARDS':
      return {
        ...state,
        accounts: orderResult[action.orderBy]([...state.accounts]),
      };
    default:
      return state;
  }
}
