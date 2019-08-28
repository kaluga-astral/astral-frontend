import { debounce } from 'lodash-es';
import PropTypes from 'prop-types';
import React from 'react';
import { useField } from 'react-final-form';
import Downshift from 'downshift';

import { TextField as MuiTextField } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import Menu from './AddressFieldMenu';
import DaDataContext from './DaDataContext';

const INPUT_VALUE_DEBOUNCE_TIMEOUT = 300;

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: 'relative',
  },
});

const itemToString = (item) => {
  if (!item) {
    return '';
  }

  return item.unrestrictedValue;
};

const FormAddressField = ({
  inputValueDebounceTimeout, name, validate, placeholder, ...props
}) => {
  const classes = useStyles();
  const { input, meta } = useField(name, { validate });
  const { fetchAddressSuggestions } = React.useContext(DaDataContext);
  const [suggestions, setSuggestions] = React.useState([]);
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
    <Downshift
      selectedItem={input.value}
      itemToString={itemToString}
      onInputValueChange={handleInputValueChange}
      onChange={handleChange}
    >
      {({
        getInputProps, getItemProps, getMenuProps, highlightedIndex, isOpen,
      }) => {
        const error = meta.touched && !meta.valid;
        const helperText = meta.error && meta.touched ? meta.error : null;

        return (
          <div className={classes.root}>
            <MuiTextField
              type="text"
              fullWidth
              margin="normal"
              InputProps={getInputProps({
                placeholder,
              })}
              error={error}
              helperText={helperText}
              {...props}
            />
            <Menu
              isOpen={isOpen}
              getMenuProps={getMenuProps}
              getItemProps={getItemProps}
              highlightedIndex={highlightedIndex}
              suggestions={suggestions}
            />
          </div>
        );
      }}
    </Downshift>
  );
};

FormAddressField.defaultProps = {
  inputValueDebounceTimeout: INPUT_VALUE_DEBOUNCE_TIMEOUT,
  placeholder: null,
  validate: (value) => {
    if (value && !value.city) {
      return 'Необходимо указать город или населенный пункт';
    }

    return null;
  },
};

FormAddressField.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
  placeholder: PropTypes.string,
  inputValueDebounceTimeout: PropTypes.number,
};

export default FormAddressField;
