import PropTypes from 'prop-types';
import { moment } from '../../utils';

const DateFromNow = ({ value }) => value.fromNow();

DateFromNow.propTypes = {
  value: PropTypes.instanceOf(moment).isRequired,
};

export default DateFromNow;
