import { connect } from 'react-redux';
import TransferSendButton from '../../components/TransferScreenComponents/TransferSendButton';

const mapStateToProps = ({ transferAccountReducer }) => ({
  amount: transferAccountReducer.amount,
});

export default connect(mapStateToProps, null)(TransferSendButton);
