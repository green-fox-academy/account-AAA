import config from '../config';
import fetchAccountsAction from './fetchAccountsAction';

export default function postNewTransferAction(newTransfer, authToken) {
  return async function (dispatch) {
    try {
      const response = await fetch(`http://${config.serverAddress}:${config.port}/deposit/transfer`, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTransfer),
      });

      const responseBody = await response.json();
      if (response.status === 200) {
        dispatch(fetchAccountsAction(authToken));
        dispatch({
          type: 'POST_NEW_TRANSFER_SUCCESS',
        });
      } else {
        throw responseBody;
      }
    } catch (responseBody) {
      dispatch({
        type: 'POST_NEW_TRANSFER_ERROR',
        err: responseBody.message,
      });
    }
  };
}
