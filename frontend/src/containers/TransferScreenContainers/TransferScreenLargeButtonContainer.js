import { connect } from 'react-redux';
import TransferScreenLargeButton from '../../components/TransferScreenComponents/TransferScreenLargeButton';
import { setSenderAction } from '../../actions/newTransferAction';

const mapDispatchToProps = (dispatch) => ({
  setSender: (senderDepositId, senderId) => {
    dispatch(setSenderAction(senderDepositId, senderId));
  },
});

export default connect(null, mapDispatchToProps)(TransferScreenLargeButton);
