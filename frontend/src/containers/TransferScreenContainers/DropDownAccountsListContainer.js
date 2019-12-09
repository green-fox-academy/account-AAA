import { connect } from 'react-redux';
import DropDownAccountsList from '../../components/TransferScreenComponents/DropDownAccountsList';
import { transferAccountSelectionAction } from '../../actions/transferAccountAction';

const mapDispatchToProps = (dispatch) => ({
  transferAccountSelection: (value) => { dispatch(transferAccountSelectionAction(value)); },
});

export default connect(null, mapDispatchToProps)(DropDownAccountsList);
