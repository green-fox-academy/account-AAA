import config from '../config';

export default function fetchAccountsAction(authToken) {
  return async function (dispatch) {
    dispatch({ type: 'REFRESH_START' });
    try {
      const result = await fetch(`http://${config.serverAddress}:${config.port}/deposit`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      const data = await result.json();
      dispatch({
        type: 'FETCH_ACCOUNTS',
        accounts: data,
      });
      setTimeout(
        () => dispatch({ type: 'REFRESH_DONE' }),
        500,
      );
    } catch (error) {
      dispatch({
        type: 'FETCH_ACCOUNT_ERROR',
        error,
      });
    }
  };
}
