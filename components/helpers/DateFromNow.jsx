import PropTypes from 'prop-types';
import { moment } from '../../utils';

const DateFromNow = ({ date }) => date.fromNow();

DateFromNow.propTypes = {
  date: PropTypes.instanceOf(moment).isRequired,
};

export default DateFromNow;
