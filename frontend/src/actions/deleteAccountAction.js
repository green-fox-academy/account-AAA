import config from '../config';

export default function deleteNewAccountAction(depositId, authToken) {
  return async function (dispatch) {
    try {
      const response = await fetch(`http://${config.serverAddress}:${config.port}/deposit/${depositId}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });
      const responseBody = await response.json();
      if (response.status === 200) {
        dispatch({
          type: 'DELETE_ACCOUNT_DONE',
          deleted: parseInt(responseBody.depositId),
        });
      } else {
        throw responseBody;
      }
    } catch (responseBody) {
      dispatch({
        type: 'DELETE_ACCOUNT_ERROR',
        err: responseBody.message,
      });
    }
  };
}
