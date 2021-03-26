/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';
import { ORGANIZATION_VALIDATIONS_PARAMS } from '@astral-frontend/validations';

import TextField from '../TextField';

const OGRNField = ({ organizationType, ...props }) => {
  const {
    validateOGRN: validate,
    maxLengthORGN: maxLength,
    labelOGRN: label,
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

OGRNField.defaultProps = {
  name: 'ogrn',
  placeholder: null,
  organizationType: null,
};

OGRNField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  organizationType: PropTypes.oneOf(
    Object.keys(ORGANIZATION_VALIDATIONS_PARAMS),
  ),
};

export default OGRNField;
