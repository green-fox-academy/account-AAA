import { combineReducers } from 'redux';
import accountsReducer from './accountsReducer';
import transfersReducer from './transfersReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  userReducer,
  accountsReducer,
  transfersReducer,
});

export default rootReducer;
