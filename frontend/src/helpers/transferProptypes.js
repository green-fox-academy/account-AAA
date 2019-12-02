import PropTypes from 'prop-types';

export default PropTypes.shape({
  transferId: PropTypes.number,
  transferAmount: PropTypes.number,
  fromUserId: PropTypes.number,
  fromDepositId: PropTypes.number,
  toUserId: PropTypes.number,
  toDepositId: PropTypes.number,
  status: PropTypes.string,
  timeOfTransfer: PropTypes.string,
  direction: PropTypes.string,
  nameToUse: PropTypes.string,
});
