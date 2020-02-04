import PropTypes from 'prop-types';
import React from 'react';
import { ORGANIZATION_VALIDATIONS_PARAMS } from '@astral-frontend/validations/constants';

import TextField from '../TextField';

const INNField = ({ organizationType, ...props }) => {
  const {
    validateINN: validate,
    maxLengthINN: maxLength,
    labelINN: label,
  } = ORGANIZATION_VALIDATIONS_PARAMS[organizationType];

  return (
    <TextField
      inputProps={{ maxLength }}
      parse={value => value.replace(/[^\d]/g, '')}
      validate={validate}
      label={label}
      {...props}
    />
  );
};

INNField.defaultProps = {
  name: 'inn',
  placeholder: null,
  organizationType: null,
};

INNField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  organizationType: PropTypes.oneOf(
    Object.keys(ORGANIZATION_VALIDATIONS_PARAMS),
  ),
};

export default INNField;
