import { connect } from 'react-redux';
import ReceiveTransferScreen from '../screens/ReceiveTransferScreen';

const mapStateToProps = ({ userReducer }) => ({
  userId: userReducer.user.userId,
});

export default connect(mapStateToProps)(ReceiveTransferScreen);
