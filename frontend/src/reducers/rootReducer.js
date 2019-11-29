import { combineReducers } from 'redux';
import accountsReducer from './accountsReducer';
import transfersReducer from './transfersReducer';
import userReducer from './userReducer';
import postNewAccountReducer from './postNewAccountReducer';

const rootReducer = combineReducers({
  userReducer,
  accountsReducer,
  transfersReducer,
  postNewAccountReducer,
});

export default rootReducer;
