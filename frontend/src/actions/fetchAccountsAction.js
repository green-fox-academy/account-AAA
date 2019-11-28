import config from '../config';

export default function fetchAccountsAction(authToken) {
  return async function (dispatch) {
    const result = await fetch(`http://${config.IP}:${config.PORT}/deposit`, {
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
  };
}
