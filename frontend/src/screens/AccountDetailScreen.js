import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AccountInfo from '../components/AccountInfo';
import TransferHistory from '../components/TransferHistory';
import navigationPropTypes from '../helpers/navigationPropTypes';
import TransferButton from '../components/TransferButton';
import fetchAccountsAction from '../actions/fetchTransfersAction';

function AccountDetailScreen({
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

const mapStateToProps = ({ transfersReducer, userReducer }) => ({
  transfers: transfersReducer,
  authToken: userReducer.user.token,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTransfers: (depositId, token) => { dispatch(fetchAccountsAction(depositId, token)); },
});

AccountDetailScreen.propTypes = {
  navigation: navigationPropTypes.isRequired,
  authToken: PropTypes.string.isRequired,
  transfers: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchTransfers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetailScreen);
