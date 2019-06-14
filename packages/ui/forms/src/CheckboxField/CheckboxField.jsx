import PropTypes from 'prop-types';
import React from 'react';
import { Checkbox, FormControl } from '@astral-frontend/components';
import { FormHelperText } from '@astral-frontend/core';

import Field from '../Field';

const CheckboxField = ({
  label, labelPlacement, className, ...props
}) => (
  <Field
    {...props}
    type="checkbox"
    render={({
      disabled,
      fullWidth,
      checked,
      helperText,
      value,
      error,
      onChange,
      onBlur,
      onFocus,
    }) => (
      <FormControl
        fullWidth={fullWidth}
        error={Boolean(error)}
        component="fieldset"
        className={className}
      >
        <Checkbox
          disabled={disabled}
          checked={checked}
          value={value}
          label={label}
          labelPlacement={labelPlacement}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    )}
  />
);

CheckboxField.defaultProps = {
  fullWidth: false,
  label: null,
  labelPlacement: 'end',
  className: null,
};

CheckboxField.propTypes = {
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  labelPlacement: PropTypes.oneOf(['end', 'start', 'top', 'bottom']),
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default CheckboxField;
