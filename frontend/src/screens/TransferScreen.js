import React from 'react';
import { View } from 'native-base';
import TransferScreenLargeButton from '../containers/TransferScreenContainers/TransferScreenLargeButtonContainer';
import styles from '../styles/TransferScreenStyle';

export default function TransferScreen() {
  return (
    <View style={styles.layout}>
      <TransferScreenLargeButton screenName="InternalTransaction" buttonName="BETWEEN YOUR ACCOUNTS" />
      <TransferScreenLargeButton screenName="QRCodeScanner" buttonName="TO ANOTHER PERSON" />
    </View>
  );
}
