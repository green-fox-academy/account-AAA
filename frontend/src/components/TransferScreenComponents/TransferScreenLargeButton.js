import React from 'react';
import { Button, Text } from 'native-base';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import buttonStyle from '../../styles/LargeButtonStyle';
import navigationPropTypes from '../../helpers/navigationPropTypes';

function TransferScreenLargeButton({ navigation, screenName, buttonName }) {
  const account = navigation.getParam('account');

  return (
    <Button
      primary
      style={buttonStyle.button}
      onPress={() => { navigation.navigate(screenName, { account }); }}
      block
    >
      <Text>{buttonName}</Text>
    </Button>
  );
}

TransferScreenLargeButton.propTypes = {
  navigation: navigationPropTypes.isRequired,
  screenName: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default withNavigation(TransferScreenLargeButton);
