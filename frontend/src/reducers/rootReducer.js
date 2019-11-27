import { combineReducers } from 'redux';
import fetchAccountsReducer from './fetchAccountsReducer';

const rootReducer = combineReducers({
  // put each reducer inside there
  fetchAccountsReducer,
});

export default rootReducer;
