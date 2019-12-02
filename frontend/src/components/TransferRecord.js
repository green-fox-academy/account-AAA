import React from 'react';
import {
  CardItem, Text, Icon, Right,
} from 'native-base';
import styles from '../styles/TransferDetailStyle';
import transferProptypes from '../helpers/transferProptypes';

const transferIcon = {
  to: {
    iconName: 'arrow-dropdown-circle',
    iconColor: 'red',
  },
  from: {
    iconName: 'arrow-dropup-circle',
    iconColor: 'green',
  },
};

export default function TransferRecord({ transfer }) {
  const transferText = `$ ${transfer.transferAmount} ${transfer.direction} ${transfer.nameToUse}`;
  const { iconName, iconColor } = transferIcon[transfer.direction];
  return (
    <CardItem style={styles.transfer}>
      <Icon name={iconName} style={{ color: iconColor }} />
      <Right style={styles.transferDetail}>
        <Text style={styles.transferText}>{transferText}</Text>
        <Text style={styles.transferTime}>{`time: ${transfer.timeOfTransfer}`}</Text>
      </Right>
    </CardItem>
  );
}

TransferRecord.propTypes = {
  transfer: transferProptypes.isRequired,
};
