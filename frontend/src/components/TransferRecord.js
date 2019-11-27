import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { CardItem, Text } from 'native-base';
import PropTypes from 'prop-types';
import accountPropTypes from '../helpers/accountPropTypes';

export default function TransferRecord({ transfer, account }) {
  const [transferState, setTransferState] = useState({});
  useEffect(() => {
    let iconName; let
      transferDetail;
    if (transfer.fromUserId === transfer.toUserId) {
      if (transfer.fromDepositId === account.id) {
        transferDetail = `to ${transfer.toDepositId}`;
        iconName = 'arrowdown';
      } else {
        transferDetail = `from ${transfer.fromDepositId}`;
        iconName = 'arrowup';
      }
    } else if (transfer.fromDepositId === account.id) {
      transferDetail = `to ${transfer.toUserId}`;
      iconName = 'arrowdown';
    } else {
      transferDetail = `from ${transfer.fromUserId}`;
      iconName = 'arrowup';
    }

    setTransferState({
      iconName,
      transferDetail,
    });
  }, []);

  return Object.keys(transferState).length > 0
    ? (
      <>
        <CardItem>
          <FontAwesome
            name={transferState.iconStyle}
            size={20}
          />
          <Text>
            $
            {' '}
            {transfer.transferAmount}
            {' '}
            {transferState.transferDetail}
          </Text>
        </CardItem>
      </>
    )
    : (<></>);
}

TransferRecord.propTypes = {
  transfer: PropTypes.shape({
    transferId: PropTypes.number,
    transferAmount: PropTypes.number,
    fromUserId: PropTypes.number,
    fromDepositId: PropTypes.number,
    toUserId: PropTypes.number,
    toDepositId: PropTypes.number,
    status: PropTypes.string,
    timeOfTransfer: PropTypes.string,
  }).isRequired,
  account: accountPropTypes.isRequired,
};
