import React from 'react';
import { Text, Button, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';
import buttonStyle from '../../styles/BottomButtonStyle';
import navigationPropTypes from '../../helpers/navigationPropTypes';

function ScanButton({ navigation }) {
  const navToNextPage = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <Button
      style={{ ...buttonStyle.button, alignSelf: 'center' }}
      iconLeft
      info
      onPress={() => navToNextPage('QRCodeScanner')}
    >
      <Icon name="camera" />
      <Text>Scan</Text>
    </Button>
  );
}

ScanButton.propTypes = {
  navigation: navigationPropTypes.isRequired,
};

export default withNavigation(ScanButton);
