import PropTypes from 'prop-types';
import React from 'react';
import Input from '@material-ui/core/Input';

import Field from '../Field';

const NumberField = ({ min, max, ...props }) => (
  <Field {...props}>
    {({ input }) => (
      <Input
        type="number"
        inputProps={{
          min,
          max,
        }}
        {...input}
      />
    )}
  </Field>
);

NumberField.defaultProps = {
  min: null,
  max: null,
  placeholder: 'Введите число',
};

NumberField.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  placeholder: PropTypes.string,
};

export default NumberField;
