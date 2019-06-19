import PropTypes from 'prop-types';
import React from 'react';
import { RadioGroup, Radio, FormControl } from '@astral-frontend/components';
import { FormLabel, FormHelperText } from '@astral-frontend/core';

import Field from '../Field';

const FormRadioGroupField = ({
  fullWidth, row, className, groupLabel, labelPlacement, options, ...props
}) => (
  <Field
    {...props}
    render={({
      name, helperText, error,
    }) => (
      <FormControl
        fullWidth={fullWidth}
        error={Boolean(error)}
        component="fieldset"
        className={className}
      >
        {groupLabel && <FormLabel component="legend">{groupLabel}</FormLabel>}
        <RadioGroup row={row}>
          {options.map(option => (
            <Field
              key={option.key || option.label}
              name={name}
              type="radio"
              labelPlacement={labelPlacement}
              value={String(option.value)}
              render={({
                checked, onChange, onFocus, onBlur,
              }) => (
                <Radio
                  {...option}
                  checked={checked}
                  labelPlacement={labelPlacement}
                  value={String(option.value)}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onChange={onChange}
                />
              )}
            />
          ))}
        </RadioGroup>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    )}
  />
);

FormRadioGroupField.defaultProps = {
  fullWidth: false,
  row: false,
  labelPlacement: 'end',
  className: null,
  groupLabel: null,
};

FormRadioGroupField.propTypes = {
  fullWidth: PropTypes.bool,
  row: PropTypes.bool,
  labelPlacement: PropTypes.oneOf(['end', 'start', 'top', 'bottom']),
  className: PropTypes.string,
  /** Главный label === Mui FormLabel */
  groupLabel: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  ).isRequired,
};

export default FormRadioGroupField;
