import PropTypes from 'prop-types';
import { formatDistanceStrict } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

const FormatDistanceStrict = ({ date, baseDate, options }) => formatDistanceStrict(date, baseDate, options);

FormatDistanceStrict.defaultProps = {
  options: {
    locale: ruLocale,
  },
};

FormatDistanceStrict.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  baseDate: PropTypes.instanceOf(Date).isRequired,
  options: PropTypes.shape({}),
};

export default FormatDistanceStrict;
