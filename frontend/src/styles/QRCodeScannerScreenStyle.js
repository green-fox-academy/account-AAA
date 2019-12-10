import { Dimensions, StyleSheet } from 'react-native';

const opacity = 'rgba(0, 0, 0, .6)';
export default StyleSheet.create({
  barcodeScanner: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
  },
  layerTop: { backgroundColor: opacity },
  layerCenter: {
    flex: 1.4,
    flexDirection: 'row',
  },
  layerLeft: {
    flex: 6,
    backgroundColor: opacity,
  },
  focused: {
    flex: 30,
  },
  layerRight: {
    flex: 6,
    backgroundColor: opacity,
  },
  layerBottom: {
    alignItems: 'flex-end',

    backgroundColor: opacity,
    justifyContent: 'center',
  },
  bottomButtons: {
    marginBottom: 40,
  },
});
