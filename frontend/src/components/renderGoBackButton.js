import React from 'react';
import { View } from 'react-native';
import {
  Button, Text, Icon,
} from 'native-base';
import { withNavigation } from 'react-navigation';
import buttonStyle from '../styles/BottomButtonStyle';
import navigationPropTypes from '../helpers/navigationPropTypes';

function RenderGoBackButton({ navigation }) {
  return (
    <View style={buttonStyle.view}>
      <Text style={buttonStyle.message}>Success!</Text>
      <Button
        style={buttonStyle.button}
        onPress={() => {
          navigation.navigate('Accounts');
        }}
        iconLeft
        rounded
        warning
      >
        <Icon name="add" />
        <Text style={{ color: 'white' }}>Go Back</Text>
      </Button>
    </View>
  );
}

RenderGoBackButton.propTypes = {
  navigation: navigationPropTypes.isRequired,
};
export default withNavigation(RenderGoBackButton);
