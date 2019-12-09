import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import PropTypes from 'prop-types';
import buttonStyle from '../styles/BottomButtonStyle';
import CreateButton from './CreateButton';

export default function RenderCreateButton({
  postNewAccount, token, status, accountName,
}) {
  if (status === 'pending') {
    return (
      <View style={buttonStyle.view}>
        <Text style={buttonStyle.message} />
        <CreateButton postNewAccount={postNewAccount} token={token} accountName={accountName} />

      </View>

    );
  } if (status === 'error') {
    return (
      <View style={buttonStyle.view}>
        <Text style={buttonStyle.message}>Account name is taken.</Text>
        <CreateButton postNewAccount={postNewAccount} token={token} accountName={accountName} />
      </View>
    );
  }
  return null;
}
RenderCreateButton.propTypes = {
  token: PropTypes.string.isRequired,
  postNewAccount: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  accountName: PropTypes.string.isRequired,
};
