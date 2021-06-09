import PropTypes from 'prop-types';
import React from 'react';
import { mustBeDatePeriod } from '@astral/validations';

import Field from '../Field';

const FormDateField = ({
  inputProps: { min, max, ...restInputProps },
  ...props
}) => (
  <Field
    type="date"
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{ min, max, ...restInputProps }}
    {...props}
    validate={value => mustBeDatePeriod(min, value, max)}
  />
);

FormDateField.defaultProps = {
  inputProps: {
    min: '1000-01-01',
    max: '9999-12-31',
  },
};

FormDateField.propTypes = {
  inputProps: PropTypes.shape({
    min: PropTypes.string,
    max: PropTypes.string,
  }),
};

export default FormDateField;
