import React from 'react';
import {
  Button, Icon, Text, View,
} from 'native-base';
import PropTypes from 'prop-types';
import buttonStyle from '../styles/BottomButtonStyle';


export default function CreateButton({
  status, postNewAccount, token, accountName,
}) {
  const handlePress = () => {
    postNewAccount(accountName, token);
  };

  return (

    <View style={buttonStyle.view}>
      {status === 'error' ? <Text style={buttonStyle.message}>Account name is taken.</Text> : null}

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
    </View>

  );
}

CreateButton.propTypes = {
  token: PropTypes.string.isRequired,
  postNewAccount: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  accountName: PropTypes.string.isRequired,
};
