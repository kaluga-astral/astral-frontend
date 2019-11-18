import PropTypes from 'prop-types';
import matchSorter from 'match-sorter';
import React from 'react';
import { TextField, CircularProgress } from '@astral-frontend/core';
import MuiAutocomplete from '@material-ui/lab/Autocomplete';

// import TextField from '../TextField';

const Autocomplete = ({
  className,
  value,
  loading,
  loadingText,
  noOptionsText,
  options,
  getOptionLabel,
  open,
  filterOptions,
  onOpen,
  onInputChange,
  onClose,
  onChange,
  // ======MUITextFieldProps=====
  ...MuiTextFieldProps
}) => {
  return (
    <MuiAutocomplete
      className={className}
      value={value}
      loading={loading}
      loadingText={loadingText}
      noOptionsText={noOptionsText}
      open={open}
      openText="Открыть"
      options={options}
      filterOptions={filterOptions}
      getOptionLabel={getOptionLabel}
      onOpen={onOpen}
      onClose={onClose}
      onChange={onChange}
      onInputChange={onInputChange}
      renderInput={params => (
        <TextField
          {...params}
          fullWidth
          margin="normal"
          {...MuiTextFieldProps}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

Autocomplete.defaultProps = {
  className: null,
  open: false,
  loading: null,
  loadingText: 'Загрузка...',
  noOptionsText: 'Ничего не найдено',
  getOptionLabel: option => option.label,
  filterOptions: (options, { inputValue }) => {
    return matchSorter(options, inputValue, { keys: [item => item.label] });
  },
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  onInputChange: PropTypes.func,
  onOpen: PropTypes.func,
  value: null,
  options: [],
};

Autocomplete.propTypes = {
  className: PropTypes.string,
  filterOptions: PropTypes.func,
  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   */
  getOptionLabel: PropTypes.func,
  /**
   * If `true`, the component is in a loading state.
   */
  loading: PropTypes.bool,
  /**
   * Text to display when in a loading state.
   */
  loadingText: PropTypes.node,
  /**
   * Text to display when there are no options.
   */
  noOptionsText: PropTypes.node,
  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback
   * @param {any} value
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the input value changes.
   *
   * @param {object} event The event source of the callback.
   * @param {string} value
   */
  onInputChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: PropTypes.func,
  /**
   * Control the popup` open state.
   */
  open: PropTypes.bool,
  /**
   * Array of options.
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.any,
    }),
  ),
  /**
   * The value of the autocomplete.
   */
  value: PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.any,
  }),
};
export default Autocomplete;
