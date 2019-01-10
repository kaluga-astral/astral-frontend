import PropTypes from 'prop-types';

const FormateCurrency = ({ value, currency }) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency }).format(value);

FormateCurrency.defaultProps = {
  currency: 'RUB',
};

FormateCurrency.propTypes = {
  currency: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default FormateCurrency;
