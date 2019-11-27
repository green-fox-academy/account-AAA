export default function fetchAccountsAction(authToken) {
  return async function (dispatch) {
    const result = await fetch(process.env.GET_ACCOUNTS_URL, {
      method: 'GET',
      headers: {
        //-----------------
        // potential bug A or a
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
