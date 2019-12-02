import config from '../config';

export default function postNewAccountAction(accountName, authToken) {
  return async function (dispatch) {
    try {
      const response = await fetch(`http://${config.serverAddress}:${config.port}/deposit`, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ depositName: accountName }),
      });
      const data = await response.json();
      if (response.status === 200) {
        dispatch({
          type: 'POST_NEW_ACCOUNT',
          accountName: data,
        });
      } else {
        throw response;
      }
    } catch (response) {
      dispatch({
        type: 'POST_NEW_ACCOUNT_ERROR',
        err: response.message,
      });
    }
  };
}
