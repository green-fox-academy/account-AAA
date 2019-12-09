import { combineReducers } from 'redux';
import accountsReducer from './accountsReducer';
import transfersReducer from './transfersReducer';
import userReducer from './userReducer';
import transferAccountReducer from './transferAccountReducer';

const rootReducer = combineReducers({
  userReducer,
  accountsReducer,
  transfersReducer,
  transferAccountReducer,
});

export default rootReducer;
