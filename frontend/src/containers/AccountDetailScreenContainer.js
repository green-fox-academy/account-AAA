import { connect } from 'react-redux';
import AccountDetailScreen from '../screens/AccountDetailScreen';
import fetchTransfersAction from '../actions/fetchTransfersAction';

const mapStateToProps = ({ transfersHistoryReducer, userReducer }) => ({
  transfers: transfersHistoryReducer,
  authToken: userReducer.user.token,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTransfers: (depositId, token) => { dispatch(fetchTransfersAction(depositId, token)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetailScreen);
