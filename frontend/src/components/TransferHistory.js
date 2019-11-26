import React from 'react';
import { Content, Text } from 'native-base';
import PropTypes from 'prop-types';

export default function TransferHistory({ transfers }) {
  return (
    <Content>
      {transfers.map((trans) => <Text>{trans.transferAmount}</Text>)}
    </Content>
  );
}

TransferHistory.propTypes = {
  transfers: PropTypes.shape([]).isRequired,
};
