import React from 'react';
import { Content, Text } from 'native-base';
import PropTypes from 'prop-types';
import accountPropTypes from '../helpers/accountPropTypes';
import TransferRecord from './TransferRecord';
import styles from '../styles/TransferHistoryStyle';

export default function TransferHistory({ transfers, account }) {
  return (
    <>
      <Text style={styles.historyTag}>History</Text>
      <Content>
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
  account: accountPropTypes.isRequired,
};
