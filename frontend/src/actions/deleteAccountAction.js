import config from '../config';

export default function deleteNewAccountAction(depositId, userId, authToken) {
  return async function (dispatch) {
    try {
      const response = await fetch(`http://${config.serverAddress}:${config.port}/deposit/${depositId}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${authToken}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({ userId }),
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
