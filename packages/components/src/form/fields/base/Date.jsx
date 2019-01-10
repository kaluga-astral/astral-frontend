import { format } from 'date-fns';
import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';

import Field from '../Field';

const DateField = ({ label, ...props }) => (
  <Field {...props}>
    {({ input: { value, onChange, ...input } }) => (
      <TextField
        {...input}
        value={value && format(value, 'yyyy-MM-dd')}
        onChange={(e) => {
          onChange(new Date(e.target.value));
        }}
        label={label}
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
    )}
  </Field>
);

DateField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default DateField;
