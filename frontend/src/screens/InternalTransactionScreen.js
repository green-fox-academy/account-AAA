import React from 'react';
import {
  View, Text, Card, CardItem, Content,
} from 'native-base';
import PropTypes from 'prop-types';
import navigationPropTypes from '../helpers/navigationPropTypes';
import DropDownAccountsList from '../containers/TransferScreenContainers/DropDownAccountsListContainer';
import TransferAmountInput from '../containers/TransferScreenContainers/TransferAmountInputContainer';
import TransferSendButton from '../containers/TransferScreenContainers/TransferSendButtonContainer';

export default function InternalTransactionScreen({
  accounts, navigation, selection,
}) {
  const account = navigation.getParam('account');
  const filterAccounts = accounts.filter((ele) => ele.depositName !== account.depositName);

  return (
    <Content padder>
      <View>
        <Card>
          <CardItem>
            <Text>
              From:
              {' '}
              {account.depositName}
            </Text>
          </CardItem>
        </Card>
      </View>

      <View>
        <DropDownAccountsList accounts={filterAccounts} />
      </View>

      {
        selection === '' ? null : (
          <Content style={{ height: 500 }}>
            <TransferAmountInput />
            <View style={{
              height: '90%', alignItems: 'flex-end', marginTop: '70%',
            }}
            >
              <TransferSendButton depositAmount={account.depositAmount} />
            </View>
          </Content>
        )
      }
    </Content>
  );
}

InternalTransactionScreen.propTypes = {
  navigation: navigationPropTypes.isRequired,
  accounts: PropTypes.arrayOf(PropTypes.object).isRequired,
  selection: PropTypes.string.isRequired,
};
