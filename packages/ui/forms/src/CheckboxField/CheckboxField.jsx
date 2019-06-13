import PropTypes from 'prop-types';
import React from 'react';
import { Checkbox } from '@astral-frontend/components';

import Field from '../Field';

const CheckboxField = ({
  label, labelPlacement, className, ...props
}) => (
  <Field
    {...props}
    type="checkbox"
    render={({
      disabled,
      required,
      checked,
      helperText,
      value,
      error,
      onChange,
      onBlur,
      onFocus,
    }) => (
      <Checkbox
        disabled={disabled}
        required={required}
        checked={checked}
        value={value}
        className={className}
        label={label}
        labelPlacement={labelPlacement}
        helperText={helperText}
        error={error}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    )}
  />
);

CheckboxField.defaultProps = {
  label: null,
  labelPlacement: 'end',
  className: null,
};

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  labelPlacement: PropTypes.oneOf(['end', 'start', 'top', 'bottom']),
  className: PropTypes.string,
};

export default CheckboxField;
