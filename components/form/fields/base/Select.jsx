import PropTypes from 'prop-types';
import React from 'react';
import Select from '@material-ui/core/Select';

import Field from '../Field';
import { MenuItem } from '../../../Menu';

const SelectField = ({
  multiple, classes, options, renderValue, ...props
}) => (
  <Field {...props}>
    {({ input }) => (
      <Select multiple={multiple} classes={classes} renderValue={renderValue} {...input}>
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
  multiple: false,
  placeholder: 'Выберите значение',
};

SelectField.propTypes = {
  multiple: PropTypes.bool,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  ).isRequired,
};

export default SelectField;
