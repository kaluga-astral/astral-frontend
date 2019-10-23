import { debounce } from 'lodash-es';
import React from 'react';
import PropTypes from 'prop-types';

import Autocomplete from '../Autocomplete';

const INPUT_VALUE_DEBOUNCE_TIMEOUT = 300;

const AsyncAutocomplete = ({ fetchSuggestions, inputValueDebounceTimeout }) => {
  const [suggestions, setSuggestions] = React.useState([]);
  const handleInputValueChange = React.useCallback(
    debounce((inputValue) => {
      if (inputValue) {
        fetchSuggestions(inputValue).then(setSuggestions);
      }
    }, inputValueDebounceTimeout),
    [],
  );

  return <Autocomplete onInputValueChange={handleInputValueChange} suggestions={suggestions} />;
};

AsyncAutocomplete.defaultProps = {
  inputValueDebounceTimeout: INPUT_VALUE_DEBOUNCE_TIMEOUT,
};

AsyncAutocomplete.propTypes = {
  inputValueDebounceTimeout: PropTypes.number,
  fetchSuggestions: PropTypes.func.isRequired,
};

export default AsyncAutocomplete;
