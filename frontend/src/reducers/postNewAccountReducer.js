const initState = {
  status: 'pending',
  user: [],
};


export default function postNewAccountReducer(state = initState, action) {
  switch (action.type) {
    case 'POST_NEW_ACCOUNT':
      return { ...state, status: 'done', user: action.accountName };
    case 'POST_NEW_ACCOUNT_ERROR':
      return { ...state };
    default:
      return { ...state };
  }
}
