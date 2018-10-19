import PropTypes from 'prop-types';
import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import Field from '../Field';

const SwitchField = props => (
  <Field {...props} type="checkbox">
    {({ input: { value, ...input } }) => (
      <FormControlLabel control={<Switch {...input} value={String(value)} />} />
    )}
  </Field>
);

SwitchField.defaultProps = {
  placeholder: 'Введите текст',
};

SwitchField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default SwitchField;
