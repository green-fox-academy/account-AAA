import React from 'react';
import { Button, Text } from 'native-base';
import navigationPropTypes from '../helpers/navigationPropTypes';

// mockup accounts for testing purposes
const accounts = [
  {
    id: 1,
    depositName: 'Main account',
    userID: 1,
    depositAmount: 3400,
    interestRate: '0.25%',
  },
  {
    id: 2,
    depositName: 'Savings account',
    userID: 1,
    depositAmount: 0,
    interestRate: '2.5%',
  },
  {
    id: 3,
    depositName: 'Investment account',
    userID: 1,
    depositAmount: 0,
    interestRate: '4%',
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
