import { connect } from 'react-redux';
import TransferHistory from '../components/TransferHistory';
import fetchTransfersAction from '../actions/fetchTransfersAction';

const mapStateToProps = ({ transfersHistoryReducer, userReducer }) => ({
  transfers: transfersHistoryReducer.transfers,
  authToken: userReducer.user.token,
  refreshing: transfersHistoryReducer.refreshing,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTransfers: (depositId, token) => { dispatch(fetchTransfersAction(depositId, token)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(TransferHistory);
