import React from 'react';
import { Text } from 'native-base';
import PropTypes from 'prop-types';
import HeaderBar from '../components/HeaderBar';

export default function AccountsScreen({ navigation }) {
  // static accounts data can be found at
  /* eslint-disable no-alert, no-console */
  console.log(navigation.getParam('accounts'));
  /* eslint-enable no-alert */
  return (
    <>
      <HeaderBar pageTitle="Accounts" navi={navigation} />
      <Text>to be implemented: JSAP-1</Text>
    </>
  );
}

AccountsScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.object).isRequired,
};
