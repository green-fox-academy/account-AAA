import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AccountInfo from '../components/AccountInfo';
import TransferHistory from '../components/TransferHistory';
import navigationPropTypes from '../helpers/navigationPropTypes';
import TransferButton from '../components/TransferButton';

export default function AccountDetailScreen({
  fetchTransfers, transfers, authToken, navigation,
}) {
  const account = navigation.getParam('account');
  useEffect(() => {
    fetchTransfers(account.id, authToken);
  }, []);
  return (
    <>
      <AccountInfo account={account} />
      <TransferHistory transfers={transfers} account={account} />
      <TransferButton />
    </>
  );
}

AccountDetailScreen.propTypes = {
  navigation: navigationPropTypes.isRequired,
  authToken: PropTypes.string.isRequired,
  transfers: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchTransfers: PropTypes.func.isRequired,
};
