import PropTypes from 'prop-types';
import { formatDistance } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

const DateDistanceInWordsToNow = ({ date, baseDate, options }) => formatDistance(date, baseDate, options);

DateDistanceInWordsToNow.defaultProps = {
  options: {
    locale: ruLocale,
  },
};

DateDistanceInWordsToNow.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  baseDate: PropTypes.instanceOf(Date).isRequired,
};

export default DateDistanceInWordsToNow;
