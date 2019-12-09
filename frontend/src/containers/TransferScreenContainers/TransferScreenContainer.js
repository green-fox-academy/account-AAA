import { connect } from 'react-redux';
import TransferScreen from '../../screens/TransferScreen';
import { setSenderAction } from '../../actions/newTransferAction';

const mapDispatchToProps = (dispatch) => ({
  setSender: (senderDepositId, senderId) => {
    dispatch(setSenderAction(senderDepositId, senderId));
  },
});

export default connect(null, mapDispatchToProps)(TransferScreen);
