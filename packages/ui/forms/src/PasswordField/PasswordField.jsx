import React, { useState } from 'react';
import PropTypes from 'prop-types';

import VisibilityButton from './VisibilityButton';
import Field from '../Field';

const PasswordField = props => {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisibilityButtonClick = () => setIsVisible(!isVisible);

  return (
    <Field
      {...props}
      type={isVisible ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <VisibilityButton
            isVisible={isVisible}
            onClick={handleVisibilityButtonClick}
          />
        ),
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
