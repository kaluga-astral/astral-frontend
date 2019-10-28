import { omit } from 'lodash-es';
import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'react-final-form';

import { AsyncAutocomplete } from '@astral-frontend/components';

const itemToString = (item) => {
  if (!item) {
    return '';
  }

  return item.label;
};

const AsyncAutocompleteField = ({
  name, validate, required, InputProps, ...props
}) => {
  const { input, meta } = useField(name, {
    validate,
  });
  const [selectedItem, setSelectedItem] = React.useState(input.value);
  const error = meta.invalid && ((required && meta.touched) || (!required && meta.visited));
  const helperText = error ? meta.error : null;
  const handleChange = (item) => {
    setSelectedItem(item);
    input.onChange(item.value);
  };

  return (
    <AsyncAutocomplete
      {...props}
      selectedItem={selectedItem}
      error={error}
      required={required}
      helperText={helperText}
      InputProps={{
        ...InputProps,
        ...omit(input, ['value', 'onChange']),
      }}
      onChange={handleChange}
    />
  );
};

AsyncAutocompleteField.defaultProps = {
  itemToString,
  InputProps: null,
  required: false,
  validate: null,
};

AsyncAutocompleteField.propTypes = {
  itemToString: PropTypes.func,
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
  InputProps: PropTypes.shape({}),
  required: PropTypes.bool,
};

export default AsyncAutocompleteField;
