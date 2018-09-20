import PropTypes from 'prop-types';
import { format as formateDate } from 'date-fns';

const FormattedDate = ({ date, format }) => formateDate(date, format);

FormattedDate.defaultProps = {
  format: 'DD.MM.YYYY',
};

FormattedDate.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  format: PropTypes.string,
};

export default FormattedDate;
