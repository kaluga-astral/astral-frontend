import PropTypes from 'prop-types';
import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Field from '../Field';

const CheckboxField = ({ label, ...props }) => (
  <Field {...props} type="checkbox">
    {({ input: { value, ...input } }) => (
      <FormControlLabel label={label} control={<Checkbox {...input} value={String(value)} />} />
    )}
  </Field>
);

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CheckboxField;
