import config from '../config';

export default function fetchTransfersAction(depositId, authToken) {
  return async function (dispatch) {
    try {
      const result = await fetch(`http://${config.serverAddress}:${config.port}/deposit/${depositId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      const data = await result.json();
      setTimeout(() => dispatch({
        type: 'FETCH_TRANSFERS',
        transfers: data,
      }), 500);
    } catch (error) {
      dispatch({
        type: 'FETCH_TRANSFERS_ERROR',
        error,
      });
    }
  };
}
