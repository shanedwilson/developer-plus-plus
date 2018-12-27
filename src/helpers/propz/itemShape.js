import PropTypes from 'prop-types';

const itemShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  doneDate: PropTypes.number.isRequired,
});

export default itemShape;
