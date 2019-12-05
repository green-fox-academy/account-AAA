import navigationPropTypes from '../helpers/navigationPropTypes';
const initState = {
  accounts: [],
  displayName: '',
  status: '',
};

export default function accountsReducer(state = initState, action) {
  switch (action.type) {
    case 'FETCH_ACCOUNTS':
      console.log('fetch')
      return {
        ...state,
        accounts: action.accounts,
        status: 'pending',
      };
    case 'UPDATE_DISPLAY':
        console.log('update')
      return {
        ...state,
        displayName: action.displayName,
        status: 'pending',
      };
    case 'POST_NEW_ACCOUNT':
        console.log('post')
      return {
        ...state,
        accounts: [...state.accounts, action.account],
        status: 'done',
      };
    case 'POST_NEW_ACCOUNT_ERROR':
      console.log('in error')
      return {
        ...state,
        status:'error',
      }
    case 'START_A_NEW_PAGE':
      console.log('start')
      return {
        ...state,
        status:'',
      }
      
    default:
      console.log('here',action.err)
      return state;
  }
}
