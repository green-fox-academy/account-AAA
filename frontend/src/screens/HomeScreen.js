import React from 'react';
import { Button, Text } from 'native-base';
import navigationPropTypes from '../helpers/navigationPropTypes';

export default function HomeScreen({ navigation }) {
  return (
    <Button
      bordered
      style={{ alignSelf: 'center', marginTop: 100 }}
      onPress={() => navigation.navigate('Accounts')}
    >
      <Text>Accounts</Text>
    </Button>
  );
}

HomeScreen.propTypes = {
  navigation: navigationPropTypes.isRequired,
};
