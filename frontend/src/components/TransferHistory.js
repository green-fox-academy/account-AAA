import React, { useEffect } from 'react';
import { Content, Text, View } from 'native-base';
import PropTypes from 'prop-types';
import { RefreshControl } from 'react-native';
import accountPropTypes from '../helpers/accountPropTypes';
import TransferRecord from './TransferRecord';
import styles from '../styles/TransferHistoryStyle';

export default function TransferHistory({
  transfers, refreshing, account, fetchTransfers, authToken,
}) {
  useEffect(() => {
    fetchTransfers(account.id, authToken);
  }, []);

  const sumTotal = (direction) => transfers.reduce(
    ((sum, transfer) => sum + (transfer.direction === direction ? transfer.transferAmount : 0)), 0,
  );

  return (
    <>
      <Text style={styles.historyTag}>Transaction History</Text>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          {`Income: $ ${sumTotal('from')}`}
        </Text>
        <Text style={styles.summaryText}>
          {`Expense: $ ${sumTotal('to')}`}
        </Text>
      </View>
      <Content
        refreshControl={(
          <RefreshControl
            onRefresh={() => {
              fetchTransfers(account.id, authToken);
            }}
            refreshing={refreshing}
            progressBackgroundColor="#fff"
          />
        )}
      >
        {transfers.length > 0
          ? (transfers.map((transfer) => (
            <TransferRecord
              key={transfer.transferId}
              transfer={transfer}
              account={account}
            />
          ))
          )
          : <></>}
      </Content>
    </>
  );
}

TransferHistory.propTypes = {
  transfers: PropTypes.arrayOf(PropTypes.object).isRequired,
  authToken: PropTypes.string.isRequired,
  account: accountPropTypes.isRequired,
  refreshing: PropTypes.bool.isRequired,
  fetchTransfers: PropTypes.func.isRequired,
};
