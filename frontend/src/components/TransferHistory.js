import React from 'react';
import { Content, Text } from 'native-base';
import PropTypes from 'prop-types';
import accountPropTypes from '../helpers/accountPropTypes';
import TransferRecord from './TransferRecord';

export default function TransferHistory({ transfers, account }) {
  return (
    <>
      <Text>History</Text>
      <Content>
        {transfers.map((transfer) => <TransferRecord transfer={transfer} account={account} />)}
      </Content>
    </>
  );
}

TransferHistory.propTypes = {
  transfers: PropTypes.shape([]).isRequired,
  account: accountPropTypes.isRequired,
};
