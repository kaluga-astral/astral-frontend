/* eslint-disable react/jsx-no-duplicate-props */
import PropTypes from 'prop-types';
import React from 'react';
import {
  CircularProgress,
  Autocomplete as MuiAutocomplete,
} from '@astral-frontend/core';

import TextField from '../TextField';

const Autocomplete = React.forwardRef(
  (
    {
      className,
      value,
      inputValue,
      disabled,
      disableClearable,
      loading,
      freeSolo,
      loadingText = 'Загрузка...',
      noOptionsText = 'Ничего не найдено',
      options = [],
      getOptionLabel,
      isOptionEqualToValue,
      open,
      filterOptions,
      onOpen,
      onInputChange,
      onClose,
      onChange,
      // ======MUITextFieldProps=====
      ...MuiTextFieldProps
    },
    ref,
  ) => {
    return (
      <MuiAutocomplete
        className={className}
        disabled={disabled}
        freeSolo={freeSolo}
        value={value}
        inputValue={inputValue}
        loading={loading}
        disableClearable={disableClearable}
        loadingText={loadingText}
        noOptionsText={noOptionsText}
        open={open}
        options={options}
        filterOptions={filterOptions}
        forcePopupIcon={false}
        getOptionLabel={getOptionLabel}
        isOptionEqualToValue={isOptionEqualToValue}
        onOpen={onOpen}
        onClose={onClose}
        onChange={onChange}
        onInputChange={onInputChange}
        renderInput={params => {
          const InputProps = {
            ...params.InputProps,
            ...MuiTextFieldProps.InputProps,
          };
          const inputProps = {
            ...params.inputProps,
            ...MuiTextFieldProps.inputProps,
          };

          return (
            <TextField
              {...params}
              fullWidth
              {...MuiTextFieldProps}
              inputRef={ref}
              inputProps={inputProps}
              InputProps={{
                ...InputProps,
                endAdornment: (
                  <>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {InputProps.endAdornment}
                  </>
                ),
              }}
            />
          );
        }}
      />
    );
  },
);

Autocomplete.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  filterOptions: PropTypes.func,
  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   */
  getOptionLabel: PropTypes.func,
  isOptionEqualToValue: PropTypes.func,
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
  freeSolo: PropTypes.bool,
  disableClearable: PropTypes.bool,
  /**
   * Array of options.
   */
  options: PropTypes.arrayOf(PropTypes.any),
  /**
   * The value of the autocomplete.
   */
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  inputValue: PropTypes.string,
};

export default Autocomplete;
