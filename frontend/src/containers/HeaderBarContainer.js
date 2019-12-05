import { connect } from 'react-redux';
import HeaderBar from '../components/HeaderBar';

const mapDispatchToProps = (dispatch) => ({
  updateDisplay: (displayName) => dispatch({
    type: 'UPDATE_DISPLAY',
    displayName,
  }),
  createNewPage: () => {
    dispatch({
      type: 'START_A_NEW_PAGE',
    });
  },
});

export default connect(null, mapDispatchToProps)(HeaderBar);
