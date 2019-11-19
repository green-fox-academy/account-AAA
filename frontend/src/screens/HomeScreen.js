import React from 'react';
import { Button, Text } from 'native-base';
import navigationPropTypes from '../helpers/navigationPropTypes';

// mockup accounts for testing purposes
const accounts = [
  {
    account_id: 1,
    account_name: 'Main account',
    user_id: 1,
    balance: 3400,
    interest_rate: '0.25%',
  },
  {
    account_id: 2,
    account_name: 'Savings account',
    user_id: 1,
    balance: 0,
    interest_rate: '2.5%',
  },
  {
    account_id: 3,
    account_name: 'Investment account',
    user_id: 1,
    balance: 0,
    interest_rate: '4%',
  },

];

export default function HomeScreen({ navigation }) {
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
};
