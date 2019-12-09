import React from 'react';
import {
  Content, View, Button, Text, Icon,
} from 'native-base';
import PropTypes from 'prop-types';
import AccountCard from '../components/AccountCard';
import styles from '../styles/AccountsScreenstyle';
import SpinningWheel from '../components/SpinningWheel';

export default function AccountsScreen({
  accounts, fetchAccounts, orderAccounts, token,
}) {
  React.useEffect(
    () => { fetchAccounts(token); },
    [],
  );

  const [filterState, setFilterState] = React.useState(false);

  const filterAccounts = (orderItem) => {
    orderAccounts(orderItem, filterState ? 'Ascending' : 'Descending');
    setFilterState(!filterState);
  };

  return (
    Object.keys(accounts).length > 0
      ? <>
          <View style={styles.filterView}>
            <Button
              style={styles.filterOption}
              onPress={() => filterAccounts('depositName')}
            >
              <Text style={styles.textStyle}>Name</Text>
              <Icon name="sort" type="FontAwesome" style={styles.sortIcon} />
            </Button>
            <Button
              style={styles.filterOption}
              onPress={() => filterAccounts('depositAmount')}
            >
              <Text style={styles.textStyle}>Balance</Text>
              <Icon name="sort" type="FontAwesome" style={styles.sortIcon} />
            </Button>
            <Button
              style={styles.filterOption}
              onPress={() => filterAccounts('createdAt')}
            >
              <Text style={styles.textStyle}>Created</Text>
              <Icon name="sort" type="FontAwesome" style={styles.sortIcon} />
            </Button>
          </View>
          <Content>
            {accounts.map((account) => (
              <AccountCard
                account={account}
                key={account.id}
              />
            ))}
          </Content>
        </>
      : <SpinningWheel content="Accounts" />
  );
}

AccountsScreen.propTypes = {
  token: PropTypes.string.isRequired,
  accounts: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchAccounts: PropTypes.func.isRequired,
  orderAccounts: PropTypes.func.isRequired,
};
