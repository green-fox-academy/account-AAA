import React from 'react';
import AccountInfo from '../components/AccountInfo';
import TransferHistory from '../containers/TransferHistoryContainer';
import navigationPropTypes from '../helpers/navigationPropTypes';
import TransferButton from '../components/TransferButton';

export default function AccountDetailScreen({ navigation }) {
  const account = navigation.getParam('account');
  return (
    <>
      <AccountInfo account={account} />
      <TransferHistory account={account} />
      <TransferButton />
    </>
  );
}

AccountDetailScreen.propTypes = {
  navigation: navigationPropTypes.isRequired,
};
