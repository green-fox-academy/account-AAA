import React from 'react';
import {
  View, Text, Card, CardItem, Content,
} from 'native-base';
import { KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import navigationPropTypes from '../helpers/navigationPropTypes';
import DropDownAccountsList from '../containers/TransferScreenContainers/DropDownAccountsListContainer';
import TransferAmountInput from '../containers/TransferScreenContainers/TransferAmountInputContainer';
import TransferSendButton from '../containers/TransferScreenContainers/TransferSendButtonContainer';
import newTransferPropTypes from '../helpers/newTransferPropTypes';

export default function InternalTransactionScreen({
  accounts, navigation, newTransfer,
}) {
  const account = navigation.getParam('account');
  const filterAccounts = accounts.filter((ele) => ele.depositName !== account.depositName);
  return (
    <Content padder>
      <View>
        <Card>
          <CardItem>
            <Text>{`From: ${account.depositName} - $${account.depositAmount} available`}</Text>
          </CardItem>
        </Card>
      </View>

      <View>
        <DropDownAccountsList accounts={filterAccounts} />
      </View>

      {
        !newTransfer.receiverId ? null : (
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
            <TransferAmountInput depositAmount={account.depositAmount} />
            <View style={{
              height: '90%', alignItems: 'flex-end',
            }}
            >
              <TransferSendButton depositAmount={account.depositAmount} />
            </View>
          </KeyboardAvoidingView>
        )
      }
    </Content>
  );
}

InternalTransactionScreen.propTypes = {
  navigation: navigationPropTypes.isRequired,
  accounts: PropTypes.arrayOf(PropTypes.object).isRequired,
  newTransfer: newTransferPropTypes.isRequired,
};
