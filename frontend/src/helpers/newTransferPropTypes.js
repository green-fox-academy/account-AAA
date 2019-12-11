import PropTypes from 'prop-types';

export default PropTypes.objectOf(
  PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
);
