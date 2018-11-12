import PropTypes from 'prop-types';
import React from 'react';
import Select from '@material-ui/core/Select';

import Field from '../Field';
import { MenuItem } from '../../../Menu';

const SelectField = ({
  multiple, classes, options, renderValue, ...props
}) => (
  <Field {...props}>
    {({ input: { value: inputValue, ...input } }) => {
      const value = multiple ? [].concat(inputValue).filter(v => v) : inputValue;

      return (
        <Select
          multiple={multiple}
          classes={classes}
          renderValue={renderValue}
          value={value}
          {...input}
        >
          {options.map(option => (
            <MenuItem key={option.key || option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      );
    }}
  </Field>
);

SelectField.defaultProps = {
  multiple: false,
  label: null,
};

SelectField.propTypes = {
  multiple: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.node.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  ).isRequired,
};

export default SelectField;
