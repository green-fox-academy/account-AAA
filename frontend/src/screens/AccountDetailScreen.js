import React from 'react';
import TransferHistory from '../containers/TransferHistoryContainer';
import navigationPropTypes from '../helpers/navigationPropTypes';
import AccountCard from '../components/AccountCard';

export default function AccountDetailScreen({ navigation }) {
  const account = navigation.getParam('account');
  return (
    <>
      <AccountCard account={account} />
      <TransferHistory account={account} />
    </>
  );
}

AccountDetailScreen.propTypes = {
  navigation: navigationPropTypes.isRequired,
};
