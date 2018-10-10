import PropTypes from 'prop-types';
import { distanceInWordsStrict } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

const DateDistanceInWordsStrict = ({ dateToCompare, date, options }) => distanceInWordsStrict(dateToCompare, date, options);

DateDistanceInWordsStrict.defaultProps = {
  options: {
    locale: ruLocale,
  },
};

DateDistanceInWordsStrict.propTypes = {
  dateToCompare: PropTypes.instanceOf(Date).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  options: PropTypes.shape({}),
};

export default DateDistanceInWordsStrict;
