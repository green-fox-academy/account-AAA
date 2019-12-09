import { connect } from 'react-redux';
import TransferSendButton from '../../components/TransferScreenComponents/TransferSendButton';
import postNewTransferAction from '../../actions/postNewTransferAction';

const mapStateToProps = ({ userReducer, newTransferReducer }) => ({
  token: userReducer.user.token,
  newTransfer: newTransferReducer,
});

const mapDispatchToProps = (dispatch) => ({
  sendTransfer: (newTransfer, token) => { dispatch(postNewTransferAction(newTransfer, token)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(TransferSendButton);
