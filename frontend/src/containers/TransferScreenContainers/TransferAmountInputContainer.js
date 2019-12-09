import { connect } from 'react-redux';
import { setTransferAmountAction } from '../../actions/newTransferAction';
import TransferAmountInput from '../../components/TransferScreenComponents/TransferAmountInput';

const mapDispatchToProps = (dispatch) => ({
  transferAccountAmount: (amount) => { dispatch(setTransferAmountAction(amount)); },
});

export default connect(null, mapDispatchToProps)(TransferAmountInput);
