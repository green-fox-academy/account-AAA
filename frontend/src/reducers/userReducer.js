import config from '../config';

export default function userReducer(state = { user: { token: `${config.token}` } }, action) {
  switch (action.type) {
    case 'FETCH_USER':
      return action.user;
    default:
      return state;
  }
}
