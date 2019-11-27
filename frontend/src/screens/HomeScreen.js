import React from 'react';
import { Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import navigationPropTypes from '../helpers/navigationPropTypes';
import fetchAccountsAction from '../actions/fetchAccountsAction';

function HomeScreen({ navigation, fetchAccounts, accounts }) {
  AsyncStorage.setItem('authToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyM30.tfk9jgMkUXcz_p7au1bt9WdddK6NpXOLy8b51kNxGKM');

  React.useEffect(
    () => { fetchAccounts(); }, [],
  );
  return (
    <Button
      bordered
      style={{ alignSelf: 'center', marginTop: 100 }}
      onPress={() => navigation.navigate('Accounts', { accounts })}
    >
      <Text>Accounts</Text>
    </Button>
  );
}

HomeScreen.propTypes = {
  navigation: navigationPropTypes.isRequired,
  accounts: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchAccounts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  accounts: state.fetchAccountsReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAccounts: () => dispatch(fetchAccountsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
