import PropTypes from 'prop-types';
import React from 'react';
import { Autocomplete } from '@astral-frontend/components';

import Field from '../Field';

const FormAutocompleteField = ({ ...props }) => {
  return (
    <Field
      {...props}
      render={({ value, error, onChange, ...fieldProps }) => (
        <Autocomplete
          {...fieldProps}
          error={Boolean(error)}
          value={value || null}
          onChange={(event, option) => {
            onChange(option);
          }}
        />
      )}
    />
  );
};

FormAutocompleteField.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.any),
};

export default FormAutocompleteField;
