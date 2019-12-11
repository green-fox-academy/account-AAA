import React, { useEffect } from 'react';
import { Content, Text } from 'native-base';
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

  return (
    <>
      <Text style={styles.historyTag}>History</Text>
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
              transfer={transfer}
              account={account}
              key={transfer.transferId}
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
