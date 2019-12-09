import { connect } from 'react-redux';
import HeaderBar from '../components/HeaderBar';

const mapDispatchToProps = (dispatch) => ({
  updateDisplay: (displayName) => dispatch({
    type: 'UPDATE_DISPLAY',
    displayName,
  }),
  createNewAccount: () => {
    dispatch({
      type: 'POST_NEW_ACCOUNT_START',
    });
  },
});

export default connect(null, mapDispatchToProps)(HeaderBar);
