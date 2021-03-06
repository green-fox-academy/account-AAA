import config from '../config';

export default function postNewAccountAction(accountName, authToken) {
  return async function (dispatch) {
    try {
      dispatch({
        type: 'POST_NEW_ACCOUNT_START',
      });
      const response = await fetch(`http://${config.serverAddress}:${config.port}/deposit`, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ depositName: accountName }),
      });
      const responseBody = await response.json();
      if (response.status === 200) {
        dispatch({
          type: 'POST_NEW_ACCOUNT_DONE',
          account: responseBody,
        });
      } else {
        throw responseBody;
      }
    } catch (responseBody) {
      dispatch({
        type: 'POST_NEW_ACCOUNT_ERROR',
        err: responseBody.message,
      });
    }
  };
}
