import { debounce } from 'lodash-es';
import PropTypes from 'prop-types';
import React from 'react';
import Downshift from 'downshift';
import { TextField as MuiTextField } from '@astral-frontend/components';
import { withStyles } from '@astral-frontend/styles';

import Field from '../Field';
import Menu from './AddressFieldMenu';
import DaDataContext from './DaDataContext';

const INPUT_VALUE_DEBOUNCE_TIMEOUT = 300;

const FormAddressField = ({ classes, inputValueDebounceTimeout, ...props }) => {
  const { fetchAddressSuggestions } = React.useContext(DaDataContext);
  const [suggestions, setSuggestions] = React.useState([]);
  const handleInputValueChange = React.useCallback(
    debounce((inputValue) => {
      if (inputValue) {
        fetchAddressSuggestions(inputValue).then(setSuggestions);
      }
    }, inputValueDebounceTimeout),
  );

  return (
    <Field
      {...props}
      render={({
<<<<<<< HEAD
        placeholder,
        onChange,
        downshiftProps,
        value,
        ...fieldProps
      }) => (
          <Downshift
            id="address-field"
            onInputValueChange={handleInputValueChange}
            itemToString={item => (item ? item.value : '')}
            onChange={item => onChange(item.data)}
            {...downshiftProps}
          >
            {({
              getInputProps,
              getItemProps,
              getMenuProps,
              highlightedIndex,
              isOpen,
            }) => (
                <div className={classes.root}>
                  <MuiTextField
                    type="text"
                    fullWidth
                    margin="normal"
                    InputProps={getInputProps({
                      placeholder,
                    })}
                    {...fieldProps}
                  />
                  <Menu
                    getMenuProps={getMenuProps}
                    getItemProps={getItemProps}
                    highlightedIndex={highlightedIndex}
                    isOpen={isOpen}
                    suggestions={suggestions}
                  />
                </div>
              )}
          </Downshift>
        )}
=======
        value, placeholder, onChange, downshiftProps, ...fieldProps
      }) => (
        <Downshift
          id="address-field"
          onInputValueChange={handleInputValueChange}
          itemToString={item => (item ? item.value : '')}
          onChange={item => onChange(item.data)}
          {...downshiftProps}
        >
          {({
            getInputProps, getItemProps, getMenuProps, highlightedIndex, isOpen,
          }) => (
            <div className={classes.root}>
              <MuiTextField
                type="text"
                fullWidth
                margin="normal"
                InputProps={getInputProps({
                  placeholder,
                })}
                {...fieldProps}
              />
              <Menu
                getMenuProps={getMenuProps}
                getItemProps={getItemProps}
                highlightedIndex={highlightedIndex}
                isOpen={isOpen}
                suggestions={suggestions}
              />
            </div>
          )}
        </Downshift>
      )}
>>>>>>> f56de9f593e20b3ca07688e4e2b197242b0a500c
    />
  );
};

FormAddressField.defaultProps = {
  suggestions: [],
  inputValueDebounceTimeout: INPUT_VALUE_DEBOUNCE_TIMEOUT,
};

FormAddressField.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.shape({})),
  inputValueDebounceTimeout: PropTypes.number,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles({
  root: {
    flexGrow: 1,
    position: 'relative',
  },
})(FormAddressField);
