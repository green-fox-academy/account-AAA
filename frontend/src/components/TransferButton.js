import React from 'react';
import { Button, Text, View } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import buttonStyle from '../styles/BottomButtonStyle';
import navigationPropTypes from '../helpers/navigationPropTypes';

function TransferButton({ navigation }) {
  const account = navigation.getParam('account');

  return (
    <View style={{ alignItems: 'flex-end' }}>
      <Button
        iconLeft
        rounded
        warning
        style={buttonStyle.button}
        onPress={() => navigation.navigate('Transfer', { account })}
      >
        <FontAwesome
          name="dollar"
          style={buttonStyle.iconFont}
          size={20}
        />
        <Text>Transfer</Text>
      </Button>
    </View>
  );
}

TransferButton.propTypes = {
  navigation: navigationPropTypes.isRequired,
};

export default withNavigation(TransferButton);
