import { connect } from 'react-redux';
import { transferAccountAmountAction } from '../../actions/transferAccountAction';
import TransferAmountInput from '../../components/TransferScreenComponents/TransferAmountInput';

const mapDispatchToProps = (dispatch) => ({
  transferAccountAmount: (amount) => { dispatch(transferAccountAmountAction(amount)); },
});

export default connect(null, mapDispatchToProps)(TransferAmountInput);
