import React from 'react';
import { Content } from 'native-base';
import AccountCard from '../components/AccountCard';
import navigationPropTypes from '../helpers/navigationPropTypes';

export default function AccountsScreen({ navigation }) {
  const accounts = navigation.getParam('accounts');
  return (
    <>
      <Content>
        {accounts.map((account) => <AccountCard account={account} key={account.id} />)}
      </Content>
    </>
  );
}

AccountsScreen.propTypes = {
  navigation: navigationPropTypes.isRequired,
};
