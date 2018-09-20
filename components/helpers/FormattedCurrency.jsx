import PropTypes from 'prop-types';

const FormattedCurrency = ({ value, currency }) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency }).format(value);

FormattedCurrency.defaultProps = {
  currency: 'RUB',
};

FormattedCurrency.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default FormattedCurrency;
