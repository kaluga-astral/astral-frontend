import React, { useState } from 'react';
import PropTypes from 'prop-types';

import VisibilityButton from './VisibilityButton';
import Field from '../Field';

const PasswordField = ({ InputProps, ...props }) => {
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
        ...InputProps,
      }}
    />
  );
};

PasswordField.defaultProps = {
  name: 'password',
  label: 'Пароль',
  placeholder: null,
  InputProps: {},
};

PasswordField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  InputProps: PropTypes.objectOf(PropTypes.any),
};

export default PasswordField;
