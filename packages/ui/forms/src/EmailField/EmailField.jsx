import PropTypes from 'prop-types';
import React from 'react';
import { mustBeEmail, EMAIL_MAX_LENGTH } from '@astral-frontend/validations';

import TextField from '../TextField';

const EmailField = props => (
  <TextField
    validate={mustBeEmail}
    inputProps={{ maxLength: EMAIL_MAX_LENGTH }}
    {...props}
  />
);

EmailField.defaultProps = {
  name: 'email',
  label: 'E-mail',
  placeholder: null,
};

EmailField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default EmailField;
