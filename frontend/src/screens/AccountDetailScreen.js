import React from 'react';
import AccountInfo from '../components/AccountInfo';
import TransferHistory from '../components/TransferHistory';
import navigationPropTypes from '../helpers/navigationPropTypes';

export default function AccountDetailScreen({ navigation }) {
  const transfers = navigation.getParam('testTransfers');
  const account = navigation.getParam('account');
  return (
    <>
      <AccountInfo account={account} />
      <TransferHistory transfers={transfers} account={account} />
    </>
  );
}

AccountDetailScreen.propTypes = {
  navigation: navigationPropTypes.isRequired,
};
