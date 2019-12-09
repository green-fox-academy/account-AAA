import React from 'react';
import { Button, Text } from 'native-base';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import buttonStyle from '../../styles/LargeButtonStyle';
import navigationPropTypes from '../../helpers/navigationPropTypes';

function TransferScreenLargeButton({ navigation, screenName, context }) {
  const account = navigation.getParam('account');
  const navToScreen = (event, screen) => {
    event.preventDefault();
    navigation.navigate(screen, { account });
  };

  return (
    <Button
      primary
      style={buttonStyle.button}
      onPress={(event) => { navToScreen(event, screenName); }}
      block
    >
      <Text>{context}</Text>
    </Button>
  );
}

TransferScreenLargeButton.propTypes = {
  navigation: navigationPropTypes.isRequired,
  screenName: PropTypes.string.isRequired,
  context: PropTypes.string.isRequired,
};

export default withNavigation(TransferScreenLargeButton);
