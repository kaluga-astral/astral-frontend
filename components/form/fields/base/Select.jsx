import PropTypes from 'prop-types';
import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Field from '../Field';

const SelectField = ({
  options, labelKey, valueKey, ...props
}) => (
  <Field {...props}>
    {({ input }) => (
      <Select {...input}>
        {options.map(option => (
          <MenuItem key={option[labelKey]} value={option[valueKey]}>
            {option[labelKey]}
          </MenuItem>
        ))}
      </Select>
    )}
  </Field>
);

SelectField.defaultProps = {
  placeholder: 'Выберите значение',
  options: [],
  labelKey: 'label',
  valueKey: 'value',
};

SelectField.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
};

export default SelectField;
