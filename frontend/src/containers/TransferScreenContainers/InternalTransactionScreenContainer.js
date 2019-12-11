import { connect } from 'react-redux';
import InternalTransactionScreen from '../../screens/InternalTransactionScreen';

const mapStateToProps = ({ accountsReducer, newTransferReducer }) => ({
  accounts: accountsReducer.accounts.filter((account) => (
    account.depositName.includes(accountsReducer.displayName)
  )),
  newTransfer: newTransferReducer,
});

export default connect(mapStateToProps,
  null)(InternalTransactionScreen);
