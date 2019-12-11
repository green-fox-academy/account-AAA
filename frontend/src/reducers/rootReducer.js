import { combineReducers } from 'redux';
import userReducer from './userReducer';
import accountsReducer from './accountsReducer';
import transfersHistoryReducer from './transfersHistoryReducer';
import newTransferReducer from './newTransferReducer';

const rootReducer = combineReducers({
  userReducer,
  accountsReducer,
  transfersHistoryReducer,
  newTransferReducer,
});

export default rootReducer;
