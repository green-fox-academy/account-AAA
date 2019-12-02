export default function postNewAccountReducer(state = [], action) {
  switch (action.type) {
    case 'POST_NEW_ACCOUNT':
      return action.accountName;
    default:
      return state;
  }
}
