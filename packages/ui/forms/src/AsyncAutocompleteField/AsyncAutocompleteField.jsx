import { omit } from 'lodash-es';
import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'react-final-form';

import { AsyncAutocomplete } from '@astral-frontend/components';

const AsyncAutocompleteField = ({
  name, validate, required, InputProps, ...props
}) => {
  const { input, meta } = useField(name, {
    validate,
  });
  const error = meta.invalid && ((required && meta.touched) || (!required && meta.visited));
  const helperText = error ? meta.error : null;
  const handleChange = (item) => {
    input.onChange(item);
  };

  return (
    <AsyncAutocomplete
      {...props}
      selectedItem={input.value}
      error={error}
      helperText={helperText}
      InputProps={{
        ...InputProps,
        ...omit(input, ['onChange', 'value']),
      }}
      onChange={handleChange}
    />
  );
};

AsyncAutocompleteField.defaultProps = {
  InputProps: null,
  validate: (value) => {
    if (value && !value.locality) {
      return 'Необходимо указать город или населенный пункт';
    }

    return null;
  },
  required: false,
};

AsyncAutocompleteField.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
  InputProps: PropTypes.shape({}),
  required: PropTypes.bool,
};

export default AsyncAutocompleteField;
