import React from 'react';
import {
  CardItem, Text, Icon, Right,
} from 'native-base';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import styles from '../styles/TransferDetailStyle';
import transferProptypes from '../helpers/transferProptypes';

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en-US');

const transferIcon = {
  to: {
    iconName: 'trending-up',
    iconColor: 'red',
  },
  from: {
    iconName: 'trending-down',
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
        <Text style={styles.transferTime}>{timeAgo.format(transfer.transferTime)}</Text>
      </Right>
    </CardItem>
  );
}

TransferRecord.propTypes = {
  transfer: transferProptypes.isRequired,
};
