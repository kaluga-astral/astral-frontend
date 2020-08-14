import React from 'react';
import PropTypes from 'prop-types';

import Typography from '../Typography';

const FormattedCurrency = ({ value, currency, ...props }) => (
  <Typography display="inline" {...props}>
    {new Intl.NumberFormat('ru-RU', { style: 'currency', currency }).format(
      value,
    )}
  </Typography>
);

FormattedCurrency.defaultProps = {
  currency: 'RUB',
};

FormattedCurrency.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string,
};

export default FormattedCurrency;
