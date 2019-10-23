import { debounce, omit } from 'lodash-es';
import PropTypes from 'prop-types';
import React from 'react';
import { useField } from 'react-final-form';
import Downshift from 'downshift';

import { Autocomplete } from '@astral-frontend/components';

import DaDataContext from './DaDataContext';

const INPUT_VALUE_DEBOUNCE_TIMEOUT = 300;

const itemToString = (item) => {
  if (!item) {
    return '';
  }

  return item.unrestrictedValue;
};

const FormAddressField = ({
  inputValueDebounceTimeout,
  name,
  validate,
  placeholder,
  required,
  ...props
}) => {
  const { input, meta } = useField(name, {
    validate,
  });
  const { fetchAddressSuggestions } = React.useContext(DaDataContext);
  const [suggestions, setSuggestions] = React.useState([]);
  const error = meta.invalid && ((required && meta.touched) || (!required && meta.visited));
  const helperText = error ? meta.error : null;
  const handleChange = (item) => {
    input.onChange(item);
  };
  const handleInputValueChange = React.useCallback(
    debounce((inputValue) => {
      if (inputValue) {
        fetchAddressSuggestions(inputValue).then(setSuggestions);
      }
    }, inputValueDebounceTimeout),
    [],
  );

  return (
    <Autocomplete
      selectedItem={input.value}
      itemToString={itemToString}
      onInputValueChange={handleInputValueChange}
      onChange={handleChange}
      suggestions={suggestions}
      required={required}
      error={error}
      helperText={helperText}
      InputProps={{
        placeholder,
        ...omit(input, ['onChange', 'value']),
      }}
      {...props}
    />
  );
};

FormAddressField.defaultProps = {
  inputValueDebounceTimeout: INPUT_VALUE_DEBOUNCE_TIMEOUT,
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
  inputValueDebounceTimeout: PropTypes.number,
  required: PropTypes.bool,
};

export default FormAddressField;
