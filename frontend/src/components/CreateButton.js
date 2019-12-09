import React from 'react';
import { Button, Icon, Text } from 'native-base';
import PropTypes from 'prop-types';
import buttonStyle from '../styles/BottomButtonStyle';


export default function CreateButton({ postNewAccount, token, accountName }) {
  const handlePress = () => {
    postNewAccount(accountName, token);
  };

  return (
    <Button
      style={buttonStyle.button}
      onPress={handlePress}
      iconLeft
      rounded
      warning
    >
      <Icon name="add" />
      <Text style={{ color: 'white' }}>Create</Text>
    </Button>

  );
}
CreateButton.propTypes = {
  token: PropTypes.string.isRequired,
  postNewAccount: PropTypes.func.isRequired,
  accountName: PropTypes.string.isRequired,
};
