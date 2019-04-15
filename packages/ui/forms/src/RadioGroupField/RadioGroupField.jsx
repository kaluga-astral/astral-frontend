import PropTypes from 'prop-types';
import React from 'react';
import { RadioGroup, Radio, FormControlLabel } from '@astral-frontend/components';

import Field from '../Field';

const FormRadioGroupField = ({ options, ...props }) => (
  <Field
    {...props}
    render={inputProps => (
      <RadioGroup name={inputProps.name} value={inputProps.value}>
        {options.map(option => (
          <FormControlLabel
            {...option}
            key={option.key || option.label}
            value={String(option.value)}
            control={<Radio onChange={e => inputProps.onChange(e.target.value)} />}
          />
        ))}
      </RadioGroup>
    )}
  />
);

FormRadioGroupField.defaultProps = {};

FormRadioGroupField.propTypes = {
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
