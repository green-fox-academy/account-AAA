import { AsyncStorage } from 'react-native';

export default function fetchAccountsAction() {
  return async function (dispatch) {
    const authToken = await AsyncStorage.getItem('authToken', (error) => {
      if (error) {
        console.log(error.message);
      }
    });

    const result = await fetch('http://10.22.18.36:3001/deposit', {
      method: 'GET',
      headers: {
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
