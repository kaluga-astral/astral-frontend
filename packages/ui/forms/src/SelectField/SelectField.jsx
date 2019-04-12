import PropTypes from 'prop-types';
import React from 'react';
import { MenuItem } from '@astral-frontend/components';

import Field from '../Field';

const FormSelectField = ({ options, renderMenuItem, ...props }) => (
  <Field select {...props}>
    {options.map(renderMenuItem)}
  </Field>
);

FormSelectField.defaultProps = {
  renderMenuItem: option => (
    <MenuItem key={option.key || option.value} value={option.value}>
      {option.label}
    </MenuItem>
  ),
};

FormSelectField.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.node.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  ).isRequired,
  renderMenuItem: PropTypes.func,
};

export default FormSelectField;
