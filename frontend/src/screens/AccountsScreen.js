import React from 'react';
import { Content } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AccountCard from '../components/AccountCard';
import fetchAccountsAction from '../actions/fetchAccountsAction';

function AccountsScreen({ accounts, fetchAccounts, user }) {
  React.useEffect(
    () => { fetchAccounts(user.token); }, [accounts],
  );

  return (
    <>
      <Content>
        {accounts.map((account) => <AccountCard account={account} key={account.id} />)}
      </Content>
    </>
  );
}

AccountsScreen.propTypes = {
  user: PropTypes.shape({ token: PropTypes.string.isRequired }).isRequired,
  accounts: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchAccounts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  accounts: state.fetchAccountsReducer,
  user: state.userReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAccounts: (token) => { dispatch(fetchAccountsAction(token)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountsScreen);
