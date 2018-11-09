import PropTypes from 'prop-types';
import React from 'react';

import TextField from './base/Text';

const LoginField = props => <TextField {...props} />;

LoginField.defaultProps = {
  name: 'login',
  label: 'Логин',
  placeholder: null,
};

LoginField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default LoginField;
