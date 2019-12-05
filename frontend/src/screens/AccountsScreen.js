import React from 'react';
import { Content } from 'native-base';
import PropTypes from 'prop-types';
import AccountCard from '../components/AccountCard';

export default function AccountsScreen({ accounts, fetchAccounts, token }) {
  React.useEffect(
    () => { fetchAccounts(token); }, [],
  );

  return (
    
    <Content>
      
      {accounts.map((account) => (
        <AccountCard
          account={account}
          key={account.id}
          
        />
      ))}
    </Content>
  );
}

AccountsScreen.propTypes = {
  token: PropTypes.string.isRequired,
  accounts: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchAccounts: PropTypes.func.isRequired,
};
