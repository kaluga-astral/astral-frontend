/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';
import { ORGANIZATION_VALIDATIONS_PARAMS } from '@astral-frontend/validations/src/constants';
import TextField from '../TextField';

const OGRNField = ({ organizationType, ...props }) => {
  const { validateOgrn: validate, ...validationParams } = ORGANIZATION_VALIDATIONS_PARAMS[
    organizationType
  ];

  return (
    <TextField
      inputProps={{ maxLength: validationParams.maxLengthORGN }}
      parse={value => value.replace(/[^\d]/g, '')}
      validate={validate}
      {...props}
    />
  );
};

OGRNField.defaultProps = {
  name: 'ogrn',
  label: 'ОГРН',
  placeholder: null,
  organizationType: null,
};

OGRNField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  organizationType: PropTypes.oneOf(Object.keys(ORGANIZATION_VALIDATIONS_PARAMS)),
};

export default OGRNField;
