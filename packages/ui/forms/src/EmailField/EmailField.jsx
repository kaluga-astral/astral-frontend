import PropTypes from 'prop-types';
import React from 'react';
import { mustBeEmail } from '@astral-frontend/validations';

import TextField from '../TextField';

const EmailField = props => <TextField validate={mustBeEmail} {...props} />;

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
