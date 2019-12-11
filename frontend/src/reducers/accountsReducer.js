const initState = {
  accounts: [],
  displayName: '',
  status: 'pending',
  refreshing: false,
};

const orderResult = {
  Ascending: (accounts, orderItem) => accounts.sort((a, b) => (a[orderItem] < b[orderItem])),
  Descending: (accounts, orderItem) => accounts.sort((a, b) => (a[orderItem] > b[orderItem])),
};

export default function accountsReducer(state = initState, action) {
  switch (action.type) {
    case 'REFRESH_START':
      return {
        ...state,
        refreshing: true,
      };
    case 'REFRESH_DONE':
      return {
        ...state,
        refreshing: false,
      };
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
    case 'DELETE_ACCOUNT_DONE':
      return {
        ...state,
        accounts: state.accounts.filter((account) => account.id !== action.deleted),
      };
    case 'ORDER_CARDS':
      return {
        ...state,
        accounts: orderResult[action.order]([...state.accounts], action.orderItem),
      };
    default:
      return state;
  }
}
