import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { Grid, Row } from 'react-native-easy-grid';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from '../styles/QRCodeScannerScreenStyle';
import navigationPropTypes from '../helpers/navigationPropTypes';

function QRCodeScannerScreen({ setReceiver, navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = React.useState(null);
  const [scanned, setScanned] = React.useState(false);
  const account = navigation.getParam('account');

  const getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setHasCameraPermission(status === 'granted');
  };

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    const scannedResult = JSON.parse(data);
    setReceiver(scannedResult.depositId, scannedResult.userId);
    navigation.navigate('ExternalTransaction', { account });
  };

  React.useEffect(() => {
    getPermissionsAsync();
  }, []);


  if (hasCameraPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? null : handleBarCodeScanned}
        style={styles.barcodeScanner}
      >
        <Grid>
          <Row style={styles.layerTop} size={1} />
          <Row style={styles.layerCenter} size={2}>
            <View style={styles.layerLeft} />
            <View style={styles.focused} />
            <View style={styles.layerRight} />
          </Row>
          <Row style={styles.layerBottom} size={1} />
        </Grid>
      </BarCodeScanner>
      {
        scanned && (
          <Button title="Tap to Scan Again" onPress={() => setScanned(false)} style={{ marginButtom: 30 }} />
        )
      }
    </View>
  );
}

QRCodeScannerScreen.propTypes = {
  navigation: navigationPropTypes.isRequired,
  setReceiver: PropTypes.func.isRequired,
};

export default withNavigation(QRCodeScannerScreen);
