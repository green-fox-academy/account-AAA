import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { Text, View } from 'native-base';
import navigationPropTypes from '../helpers/navigationPropTypes';
import styles from '../styles/ReceiveTransferScreenStyle';

export default function ReceiveTransferScreen({ navigation }) {
  const depositId = navigation.getParam('depositId');
  const depositName = navigation.getParam('depositName');
  const codeData = {
    depositId,
  };
  return (
    <View style={styles.receiveScreenView}>
      <Text style={styles.depositName}>{depositName}</Text>
      <QRCode
        value={JSON.stringify(codeData)}
        size={300}
      />
    </View>
  );
}

ReceiveTransferScreen.propTypes = {
  navigation: navigationPropTypes.isRequired,
};
