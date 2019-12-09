import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { Grid, Row } from 'react-native-easy-grid';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from '../styles/QRCodeScannerScreenStyle';

export default function QRCodeScannerScreen() {
  const [hasCameraPermission, setHasCameraPermission] = React.useState(null);
  const [scanned, setScanned] = React.useState(false);

  const getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setHasCameraPermission(status === 'granted');
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
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
          <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />
        )
      }
    </View>
  );
}
