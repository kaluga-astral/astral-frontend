import { omit } from 'lodash-es';
import PropTypes from 'prop-types';
import React from 'react';
import { useField } from 'react-final-form';

import { AsyncAutocomplete } from '@astral-frontend/components';

import DaDataContext from './DaDataContext';

const itemToString = (item) => {
  if (!item) {
    return '';
  }

  return item.unrestrictedValue;
};

const FormAddressField = ({
  name, validate, placeholder, required, ...props
}) => {
  const { input, meta } = useField(name, {
    validate,
  });
  const { fetchAddressSuggestions } = React.useContext(DaDataContext);
  const error = meta.invalid && ((required && meta.touched) || (!required && meta.visited));
  const helperText = error ? meta.error : null;
  const handleChange = (item) => {
    input.onChange(item);
  };

  return (
    <AsyncAutocomplete
      {...props}
      fetchSuggestions={fetchAddressSuggestions}
      selectedItem={input.value}
      itemToString={itemToString}
      required={required}
      error={error}
      helperText={helperText}
      InputProps={{
        placeholder,
        ...omit(input, ['onChange', 'value']),
      }}
      onChange={handleChange}
    />
  );
};

FormAddressField.defaultProps = {
  placeholder: null,
  validate: (value) => {
    if (value && !value.locality) {
      return 'Необходимо указать город или населенный пункт';
    }

    return null;
  },
  required: false,
};

FormAddressField.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export default FormAddressField;
