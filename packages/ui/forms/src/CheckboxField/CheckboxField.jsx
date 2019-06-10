import PropTypes from 'prop-types';
import React from 'react';
import { Checkbox, FormControlLabel } from '@astral-frontend/components';

import Field from '../Field';

const CheckboxField = ({ label, checkedIcon, ...props }) => (
  <Field
    {...props}
    type="checkbox"
    render={({
      disabled,
      required,
      checked,
      value,
      error,
      onChange,
      onBlur,
      onFocus,
    }) => (
      <FormControlLabel
        disabled={disabled}
        required={required}
        checked={checked}
        value={String(value)}
        label={label}
        error={error || ''}
        control={(
          <Checkbox
            value={String(value)}
            checkedIcon={checkedIcon}
          />
        )}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    )}
  />
);

CheckboxField.defaultProps = {
  label: null,
  checkedIcon: undefined,
};

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  checkedIcon: PropTypes.element,
};

export default CheckboxField;
