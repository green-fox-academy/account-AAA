import config from '../config';

export default function fetchAccountsAction(authToken) {
  return async function (dispatch) {
    try {
      const result = await fetch(`http://${config.serverAddress}:${config.port}/deposit`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      const data = await result.json();
      setTimeout(() => dispatch({
        type: 'FETCH_ACCOUNTS',
        accounts: data,
      }), 500);
    } catch (error) {
      dispatch({
        type: 'FETCH_ACCOUNT_ERROR',
        error,
      });
    }
  };
}
