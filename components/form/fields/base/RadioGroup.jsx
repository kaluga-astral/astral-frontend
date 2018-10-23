import PropTypes from 'prop-types';
import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Field from '../Field';

const RadioGroupField = ({ options, ...props }) => (
  <Field {...props}>
    {({ input: { name, value, onChange } }) => (
      <RadioGroup name={name} value={String(value)}>
        {options.map(option => (
          <FormControlLabel
            key={option.key || option.label + option.value}
            {...option}
            value={String(option.value)}
            control={<Radio onChange={e => onChange(e.target.value)} />}
          />
        ))}
      </RadioGroup>
    )}
  </Field>
);

RadioGroupField.defaultProps = {};

RadioGroupField.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  ).isRequired,
};

export default RadioGroupField;
