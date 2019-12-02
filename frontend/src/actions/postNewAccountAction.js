import config from '../config';

export default function postNewAccountAction(accountName, authToken) {
  return async function (dispatch) {
    const response = await fetch(`http://${config.serverAddress}:${config.port}/deposit`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ depositName: accountName }),
    });

    const data = await response.json();

    dispatch({
      type: 'POST_NEW_ACCOUNT',
      accountName: data,
    });
  };
}
