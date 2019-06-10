import React, { useState } from 'react';
import PropTypes from 'prop-types';

import VisibilityButton from './VisibilityButton';
import TextField from '../TextField';

const PasswordField = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TextField
      {...props}
      type={isVisible ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <VisibilityButton
            isVisible={isVisible}
            onClick={() => setIsVisible(!isVisible)}
          />),
      }}
    />
  );
};

PasswordField.defaultProps = {
  name: 'password',
  label: 'Пароль',
  placeholder: null,
};

PasswordField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PasswordField;
