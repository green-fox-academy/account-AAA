import React, { useState, useEffect } from 'react';
import {
  CardItem, Text, Icon, Right,
} from 'native-base';
import PropTypes from 'prop-types';
import accountPropTypes from '../helpers/accountPropTypes';
import styles from '../styles/TransferDetailStyle';

const transferClassifications = {
  sent: (toId, transfer) => ({
    transferDetail: `$ ${transfer.transferAmount} to ${toId}`,
    iconName: 'arrow-dropdown-circle',
    iconColor: 'red',
  }),
  received: (fromId, transfer) => ({
    transferDetail: `$ ${transfer.transferAmount} from ${fromId}`,
    iconName: 'arrow-dropup-circle',
    iconColor: 'green',
  }),
};

export default function TransferRecord({ transfer, account }) {
  const [transferState, setTransferState] = useState({});
  const shouldUseId = (transfer.fromUserId === transfer.toUserId)
    ? 'DepositId'
    : 'UserId';

  useEffect(() => {
    setTransferState(
      (account.id === transfer.fromDepositId)
        ? transferClassifications.sent(transfer[`to${shouldUseId}`], transfer)
        : transferClassifications.received(transfer[`from${shouldUseId}`], transfer),
    );
  }, []);

  return Object.keys(transferState).length > 0
    ? (
      <>
        <CardItem style={styles.transfer}>
          <Icon name={transferState.iconName} style={{ color: transferState.iconColor }} />
          <Right style={styles.transferDetail}>
            <Text style={styles.transferText}>{transferState.transferDetail}</Text>
            <Text style={styles.transferTime}>{`time: ${transfer.timeOfTransfer}`}</Text>
          </Right>

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
