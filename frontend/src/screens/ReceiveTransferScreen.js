import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { Text, View } from 'native-base';
import navigationPropTypes from '../helpers/navigationPropTypes';
import styles from '../styles/ReceiveTransferScreenStyle';

export default function ReceiveTransferScreen({ navigation }) {
  const { id, depositName, userId } = navigation.getParam('account');
  const codeData = {
    depositId: id,
    userId,
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
