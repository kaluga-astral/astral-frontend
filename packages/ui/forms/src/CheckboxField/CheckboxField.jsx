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
      checked,
      required,
      value,
      error,
      onChange,
    }) => (
      <FormControlLabel
        onChange={onChange}
        value={String(value)}
        required={required}
        checked={checked}
        disabled={disabled}
        error={error || ''}
        control={(
          <Checkbox
            value={String(value)}
            checkedIcon={checkedIcon}
          />
        )}
        label={label}
      />
    )}
  />
);

CheckboxField.defaultProps = {
  label: '',
  checkedIcon: undefined,
};

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  checkedIcon: PropTypes.element,
};

export default CheckboxField;
