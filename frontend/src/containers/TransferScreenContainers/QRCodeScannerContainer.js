import { connect } from 'react-redux';
import QRCodeScannerScreen from '../../screens/QRCodeScannerScreen';
import { setReceiverAction } from '../../actions/newTransferAction';

const mapDispatchToProps = (dispatch) => ({
  setReceiver: (receiverDepositId, receiverId) => {
    dispatch(setReceiverAction(receiverDepositId, receiverId));
  },
});

export default connect(null, mapDispatchToProps)(QRCodeScannerScreen);
