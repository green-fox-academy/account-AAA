import { connect } from 'react-redux';
import AccountsScreen from '../screens/AccountsScreen';
import fetchAccountsAction from '../actions/fetchAccountsAction';
import orderAccountsAction from '../actions/orderAccountsAction';

const mapStateToProps = ({ userReducer, accountsReducer }) => ({
  token: userReducer.user.token,
  accounts: accountsReducer.accounts.filter((account) => (
    account.depositName.includes(accountsReducer.displayName)
  )),
});

const mapDispatchToProps = (dispatch) => ({
  fetchAccounts: (token) => { dispatch(fetchAccountsAction(token)); },
  orderAccounts: (orderBy) => { dispatch(orderAccountsAction(orderBy)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountsScreen);
