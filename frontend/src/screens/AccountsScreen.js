import React from 'react';
import { Content } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AccountCard from '../components/AccountCard';
import fetchAccountsAction from '../actions/fetchAccountsAction';

function AccountsScreen({ accounts, fetchAccounts, token }) {
  React.useEffect(
    () => { fetchAccounts(token); }, [],
  );

  return (
    <>
      <Content>
        {accounts.map((account) => (
          <AccountCard
            account={account}
            key={account.id}
          />
        ))}
      </Content>
    </>
  );
}

AccountsScreen.propTypes = {
  token: PropTypes.string.isRequired,
  accounts: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchAccounts: PropTypes.func.isRequired,
};

const mapStateToProps = ({ userReducer, accountsReducer }) => ({
  token: userReducer.user.token,
  accounts: accountsReducer.accounts.filter((account) => (
    account.depositName.includes(accountsReducer.displayName)
  )),
});

const mapDispatchToProps = (dispatch) => ({
  fetchAccounts: (token) => { dispatch(fetchAccountsAction(token)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountsScreen);
