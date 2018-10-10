import PropTypes from 'prop-types';
import { distanceInWordsToNow } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

const DateDistanceInWordsToNow = ({ date, options }) => distanceInWordsToNow(date, options);

DateDistanceInWordsToNow.defaultProps = {
  options: {
    locale: ruLocale,
  },
};

DateDistanceInWordsToNow.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  options: PropTypes.shape({}),
};

export default DateDistanceInWordsToNow;
