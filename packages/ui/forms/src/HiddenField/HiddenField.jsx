import React from 'react';

import Field from '../Field';

const FormHiddenField = props => (
  <Field {...props} type="hidden" render={({ inputProps }) => <input {...inputProps} />} />
);

export default FormHiddenField;
