import config from '../config';

export default function userReducer(state = { user: { token: `${config.token}` } }) {
  return state;
}
