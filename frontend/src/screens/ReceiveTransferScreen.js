import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { Text, View } from 'native-base';
import PropTypes from 'prop-types';
import navigationPropTypes from '../helpers/navigationPropTypes';
import styles from '../styles/ReceiveTransferScreenStyle';

export default function ReceiveTransferScreen({ userId, navigation }) {
  const { id, depositName } = navigation.getParam('account');
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
  userId: PropTypes.number.isRequired,
  navigation: navigationPropTypes.isRequired,
};
