import { connect } from 'react-redux';
import DropDownAccountsList from '../../components/TransferScreenComponents/DropDownAccountsList';
import { setReceiverAction } from '../../actions/newTransferAction';

const mapDispatchToProps = (dispatch) => ({
  transferAccountSelection: (receiverDepositId, receiverId) => {
    dispatch(setReceiverAction(receiverDepositId, receiverId));
  },
});

export default connect(null, mapDispatchToProps)(DropDownAccountsList);
