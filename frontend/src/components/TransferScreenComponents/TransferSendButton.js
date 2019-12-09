import React from 'react';
import { Text, Button, Icon } from 'native-base';
import PropTypes from 'prop-types';
import buttonStyle from '../../styles/BottomButtonStyle';

export default function TransferSendButton({ depositAmount, amount }) {
  return (
    <Button
      style={buttonStyle.button}
      iconLeft
      rounded
      success
      disabled={depositAmount < amount || amount === 0}
      onPress={() => {

      }}
    >
      <Icon name="ios-arrow-dropright" />
      <Text>Send</Text>
    </Button>
  );
}

TransferSendButton.propTypes = {
  depositAmount: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};
