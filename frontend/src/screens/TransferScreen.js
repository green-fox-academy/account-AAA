import React from 'react';
import { View } from 'native-base';
import TransferScreenLargeButton from '../components/TransferScreenComponents/TransferScreenLargeButton';
import styles from '../styles/TransferScreenStyle';

export default function TransferScreen() {
  return (
    <View style={styles.layout}>
      <TransferScreenLargeButton screenName="InternalTransaction" context="BETWEEN YOUR ACCOUNTS" />
      <TransferScreenLargeButton screenName="ExternalTransaction" context="TO ANOTHER PERSON" />
    </View>
  );
}
