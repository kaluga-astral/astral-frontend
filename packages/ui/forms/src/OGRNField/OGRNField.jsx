/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';
import { mustBeOGRN } from '@astral-frontend/validations';
import ORGANIZATION_VALIDATION_PARAMS from '@astral-frontend/constants/src/organizationValidationParams';
import ORGANIZATION_TYPES from '@astral-frontend/constants/src/organizationTypes';
import TextField from '../TextField';

const OGRNField = ({ maxLength, organizationType, ...props }) => {
  const { validateOGRN: validate = mustBeOGRN } = ORGANIZATION_VALIDATION_PARAMS[organizationType] || {};

  return (
    <TextField
      inputProps={{ maxLength }}
      parse={value => value.replace(/[^\d]/g, '')}
      validate={validate}
      {...props}
    />
  );
};

OGRNField.defaultProps = {
  name: 'ogrn',
  label: 'ОГРН',
  maxLength: ORGANIZATION_TYPES.individualEntrepreneur.maxLengthOGRN,
  placeholder: null,
  organizationType: null,
};

OGRNField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  organizationType: PropTypes.oneOf(Object.keys(ORGANIZATION_VALIDATION_PARAMS)),
};

export default OGRNField;
