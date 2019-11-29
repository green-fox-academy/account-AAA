import config from '../config';

export default function fetchAccountsAction(depositId, authToken) {
  return async function (dispatch) {
    const result = await fetch(`http://${config.serverAddress}:${config.port}/deposit/${depositId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data = await result.json();
    dispatch({
      type: 'FETCH_TRANSFERS',
      transfers: data,
    });
  };
}
