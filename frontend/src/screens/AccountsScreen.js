import React from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import {
  Content, View, Button, Text, Icon,
} from 'native-base';
import { RefreshControl, Alert } from 'react-native';
import PropTypes from 'prop-types';
import AccountCard from '../components/AccountCard';
import styles from '../styles/AccountsScreenstyle';
import SpinningWheel from '../components/SpinningWheel';

export default function AccountsScreen({
  accounts, refreshing, fetchAccounts, orderAccounts, deleteAccount, token,
}) {
  React.useEffect(() => { fetchAccounts(token); }, []);

  const [filterState, setFilterState] = React.useState(false);

  const filterAccounts = (orderItem) => {
    orderAccounts(orderItem, filterState ? 'Ascending' : 'Descending');
    setFilterState(!filterState);
  };

  const handelDeletion = ({
    id, depositName, userId, depositAmount,
  }) => {
    if (depositAmount > 0) {
      alert('Please transfer out remaining balance before delete!');
    } else {
      Alert.alert(
        'Delete Deposit Account',
        `\n${depositName}`,
        [
          { text: 'Delete', onPress: () => deleteAccount(id, userId, token) },
          { text: 'Cancel', onPress: () => {} },
        ],
      );
    }
  };

  const refresh = () => {
    fetchAccounts(token);
  };

  return (
    Object.keys(accounts).length > 0
      ? (
        <>
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

          <Content
            refreshControl={(
              <RefreshControl
                onRefresh={refresh}
                refreshing={refreshing}
                progressBackgroundColor="#fff"
              />
            )}
          >
            <SwipeListView
              data={accounts}
              renderItem={(data) => (
                <AccountCard account={data.item} />
              )}
              renderHiddenItem={(data, rowMap) => (
                <View style={styles.rowBack}>
                  <Button
                    style={styles.deleteButton}
                    onPress={() => {
                      handelDeletion(data.item);
                      rowMap[data.item.id].closeRow();
                    }}
                  >
                    <Icon name="trash" style={styles.deleteIcon} />
                  </Button>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
              leftOpenValue={0}
              rightOpenValue={-70}
              disableRightSwipe
            />
          </Content>
        </>
      )
      : <SpinningWheel content="Accounts" />
  );
}

AccountsScreen.propTypes = {
  token: PropTypes.string.isRequired,
  accounts: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchAccounts: PropTypes.func.isRequired,
  orderAccounts: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  refreshing: PropTypes.bool.isRequired,
};
