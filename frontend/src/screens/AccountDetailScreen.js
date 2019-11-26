import React from 'react';
import { Card } from 'native-base';
import AccountInfo from '../components/AccountInfo';
import TransferHistory from '../components/TransferHistory';
import navigationPropTypes from '../helpers/navigationPropTypes';

export default function AccountDetailScreen({ navigation }) {
  const transfers = navigation.getParam('testTransfers');
  const account = navigation.getParam('account');
  return (
    <>
      <Card>
        <AccountInfo account={account} />
      </Card>
      <TransferHistory transfers={transfers} />
    </>
  );
}

AccountDetailScreen.propTypes = {
  navigation: navigationPropTypes.isRequired,
};
