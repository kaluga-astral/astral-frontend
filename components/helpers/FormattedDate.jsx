import PropTypes from 'prop-types';
import { moment } from '../../utils';

const FormattedDate = ({ date, format }) => date.format(format);

FormattedDate.defaultProps = {
  format: 'LLLL',
};

FormattedDate.propTypes = {
  date: PropTypes.instanceOf(moment).isRequired,
  format: PropTypes.string,
};

export default FormattedDate;
