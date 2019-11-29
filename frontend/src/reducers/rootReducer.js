import { combineReducers } from 'redux';
import fetchAccountsReducer from './fetchAccountsReducer';
import userReducer from './userReducer';
import postNewAccountReducer from './postNewAccountReducer';

const rootReducer = combineReducers({
  // put each reducer inside there
  fetchAccountsReducer,
  userReducer,
  postNewAccountReducer,
});

export default rootReducer;
