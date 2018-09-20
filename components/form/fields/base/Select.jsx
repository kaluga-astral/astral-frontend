import PropTypes from 'prop-types';
import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Field from '../Field';

const SelectField = ({ options, ...props }) => (
  <Field {...props}>
    {({ input }) => (
      <Select {...input}>
        {options.map(option => (
          <MenuItem key={option.label} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    )}
  </Field>
);

SelectField.defaultProps = {
  placeholder: 'Выберите значение',
  options: [],
};

SelectField.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};

export default SelectField;
