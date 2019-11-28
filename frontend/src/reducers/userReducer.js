export default function userReducer(state = { user: { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyM30.tfk9jgMkUXcz_p7au1bt9WdddK6NpXOLy8b51kNxGKM' } }, action) {
  switch (action.type) {
    case 'FETCH_USER':
      return action.user;
    default:
      return state;
  }
}
