import React from 'react';
import { Button, Text } from 'native-base';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import buttonStyle from '../../styles/LargeButtonStyle';
import navigationPropTypes from '../../helpers/navigationPropTypes';

function TransferScreenLargeButton({
  navigation, screenName, buttonName, setSender,
}) {
  const account = navigation.getParam('account');

  const handleTransferNav = () => {
    setSender(account.id, account.userId);
    navigation.navigate(screenName, { account });
  };

  return (
    <Button
      primary
      style={buttonStyle.button}
      onPress={handleTransferNav}
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
  setSender: PropTypes.func.isRequired,
};

export default withNavigation(TransferScreenLargeButton);
