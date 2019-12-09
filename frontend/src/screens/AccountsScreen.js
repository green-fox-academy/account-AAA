import React from 'react';
import {
  Content, View, Button, Text, Icon,
} from 'native-base';
import PropTypes from 'prop-types';
import AccountCard from '../components/AccountCard';
import styles from '../styles/AccountsScreenstyle';

export default function AccountsScreen({
  accounts, fetchAccounts, orderAccounts, token,
}) {
  React.useEffect(
    () => { fetchAccounts(token); }, [],
  );

  const [filterState, setFilterState] = React.useState(false);

  const filterAccounts = (orderBy) => {
    orderAccounts(`${orderBy} ${filterState ? 'Ascending' : 'Descending'}`);
    setFilterState(!filterState);
  };

  return (
    <>
      <View style={styles.filterView}>
        <Button
          style={styles.filterOption}
          onPress={() => filterAccounts('Account Name')}
        >
          <Text style={styles.textStyle}>Account Name</Text>
          <Icon name="sort" type="FontAwesome" style={styles.sortIcon} />
        </Button>
        <Button
          style={styles.filterOption}
          onPress={() => filterAccounts('Balance')}
        >
          <Text style={styles.textStyle}>Balance</Text>
          <Icon name="sort" type="FontAwesome" style={styles.sortIcon} />
        </Button>
        <Button
          style={styles.filterOption}
          onPress={() => filterAccounts('Created')}
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
  );
}

AccountsScreen.propTypes = {
  token: PropTypes.string.isRequired,
  accounts: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchAccounts: PropTypes.func.isRequired,
  orderAccounts: PropTypes.func.isRequired,
};
