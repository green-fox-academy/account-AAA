import { combineReducers } from 'redux';
import fetchAccountsReducer from './fetchAccountsReducer';
import accountTransfersReducer from './accountTransfersReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  // put each reducer inside there
  userReducer,
  fetchAccountsReducer,
  accountTransfersReducer,
});

export default rootReducer;
