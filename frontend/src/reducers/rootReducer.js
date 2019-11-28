import { combineReducers } from 'redux';
import fetchAccountsReducer from './fetchAccountsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  // put each reducer inside there
  fetchAccountsReducer,
  userReducer,
});

export default rootReducer;
