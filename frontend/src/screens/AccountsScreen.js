import React from 'react';
import { Text } from 'native-base';
import navigationPropTypes from '../helpers/navigationPropTypes';
import HeaderBar from '../components/HeaderBar';

export default function AccountsScreen({ navigation }) {
  // static accounts data can be found at
  /* eslint-disable no-alert, no-console */
  console.log(navigation.getParam('accounts'));
  /* eslint-enable no-alert */
  return (
    <>
      <HeaderBar pageTitle="Accounts" navigation={navigation} />
      <Text>to be implemented: JSAP-1</Text>
    </>
  );
}

AccountsScreen.propTypes = {
  navigation: navigationPropTypes.isRequired,
};
