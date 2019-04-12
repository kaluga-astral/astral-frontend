import React from 'react';

import Field from '../Field';

const FormDateField = props => (
  <Field
    type="date"
    InputLabelProps={{
      shrink: true,
    }}
    {...props}
  />
);

export default FormDateField;
