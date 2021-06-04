import React from 'react';
import { TextField as MuiTextField } from '@astral-frontend/core';
import PropTypes from 'prop-types';

const TextField = ({ variant = 'outlined', ...props }) => (
  <MuiTextField {...props} variant={variant} />
);

TextField.propTypes = {
  variant: PropTypes.string,
};

export default TextField;
