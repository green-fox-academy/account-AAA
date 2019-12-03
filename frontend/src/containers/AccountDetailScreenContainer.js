import { connect } from 'react-redux';
import AccountDetailScreen from '../screens/AccountDetailScreen';
import fetchTransfersAction from '../actions/fetchTransfersAction';

const mapStateToProps = ({ transfersReducer, userReducer }) => ({
  transfers: transfersReducer,
  authToken: userReducer.user.token,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTransfers: (depositId, token) => { dispatch(fetchTransfersAction(depositId, token)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetailScreen);
