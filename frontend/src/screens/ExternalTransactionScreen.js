import React from 'react';
import {
  View, Text,
} from 'native-base';
import { KeyboardAvoidingView } from 'react-native';
import TransferAmountInput from '../containers/TransferScreenContainers/TransferAmountInputContainer';
import TransferSendButton from '../containers/TransferScreenContainers/TransferSendButtonContainer';
import navigationPropTypes from '../helpers/navigationPropTypes';
import ScanButton from '../components/TransferScreenComponents/ScanButton';

export default function ExternalTransactionScreen({
  navigation,
}) {
  const account = navigation.getParam('account');

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <View style={{ flex: 1 }}>
        <TransferAmountInput />
      </View>
      <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
        <ScanButton />
        <Text>Press to scan QR code</Text>
      </View>
      <View style={{ flex: 3, alignItems: 'flex-end' }}>
        <TransferSendButton depositAmount={account.depositAmount} />
      </View>
    </KeyboardAvoidingView>
  );
}

ExternalTransactionScreen.propTypes = {
  navigation: navigationPropTypes.isRequired,
};
