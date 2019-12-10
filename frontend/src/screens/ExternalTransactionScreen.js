import React from 'react';
import {
  View, Card, CardItem, Text,
} from 'native-base';
import { KeyboardAvoidingView } from 'react-native';
import TransferAmountInput from '../containers/TransferScreenContainers/TransferAmountInputContainer';
import TransferSendButton from '../containers/TransferScreenContainers/TransferSendButtonContainer';
import navigationPropTypes from '../helpers/navigationPropTypes';

export default function ExternalTransactionScreen({
  navigation,
}) {
  const account = navigation.getParam('account');

  return (
    <>
      <View>
        <Card>
          <CardItem>
            <Text>{`From: ${account.depositName}`}</Text>
          </CardItem>
        </Card>
      </View>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>

        <View style={{ flex: 1 }}>
          <TransferAmountInput />
        </View>
        <View style={{ flex: 3, alignItems: 'flex-end' }}>
          <TransferSendButton depositAmount={account.depositAmount} />
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

ExternalTransactionScreen.propTypes = {
  navigation: navigationPropTypes.isRequired,
};
