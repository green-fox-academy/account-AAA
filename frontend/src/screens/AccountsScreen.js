import React from 'react';
import { Text } from 'native-base';
import navigationPropTypes from '../helpers/navigationPropTypes';

export default function AccountsScreen({ navigation }) {
  // static accounts data can be found at
  /* eslint-disable no-alert, no-console */
  console.log(navigation.getParam('accounts'));
  /* eslint-enable no-alert */
  return (
    <>
      <Text>to be implemented: JSAP-1</Text>
    </>
  );
}

AccountsScreen.propTypes = {
  navigation: navigationPropTypes.isRequired,
};
