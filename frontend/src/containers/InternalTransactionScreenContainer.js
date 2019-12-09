import { connect } from 'react-redux';
import InternalTransactionScreen from '../screens/InternalTransactionScreen';

const mapStateToProps = ({ accountsReducer, transferAccountReducer }) => ({
  accounts: accountsReducer.accounts.filter((account) => (
    account.depositName.includes(accountsReducer.displayName)
  )),
  selection: transferAccountReducer.selection,
});

export default connect(mapStateToProps,
  null)(InternalTransactionScreen);
