import PropTypes from 'prop-types';
import { format as formateDate } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

const FormatDate = ({ date, format, options }) => formateDate(date, format, options);

FormatDate.defaultProps = {
  date: PropTypes.instanceOf(Date).isRequired,
  format: 'DD.MM.YYYY',
  options: {
    locale: ruLocale,
  },
};

FormatDate.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  format: PropTypes.string,
  options: PropTypes.shape({}),
};

export default FormatDate;
