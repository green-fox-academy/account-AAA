import config from '../config';

export default function fetchTransfersAction(depositId, authToken) {
  return async function (dispatch) {
    dispatch({ type: 'REFRESH_START' });
    try {
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
      setTimeout(
        () => dispatch({ type: 'REFRESH_DONE' }),
        500,
      );
    } catch (error) {
      dispatch({
        type: 'FETCH_TRANSFERS_ERROR',
        error,
      });
    }
  };
}
