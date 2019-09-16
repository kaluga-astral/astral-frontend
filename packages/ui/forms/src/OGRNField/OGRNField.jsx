/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';
import { mustBeOGRN } from '@astral-frontend/validations';
import ORGANIZATION_VALIDATION_PARAMS from '@astral-frontend/constants/src/organization/organizationValidationsParams';
import ORGANIZATION_VALIDATIONS from '@astral-frontend/constants/src/organization/organizationValidations';
import TextField from '../TextField';

const OGRNField = ({ maxLength, organizationType, ...props }) => {
  const { validateOGRN: validate = mustBeOGRN } = ORGANIZATION_VALIDATIONS[organizationType] || {};

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
  maxLength: ORGANIZATION_VALIDATION_PARAMS.individualEntrepreneur.maxLengthOGRN,
  placeholder: null,
  organizationType: null,
};

OGRNField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  organizationType: PropTypes.oneOf(Object.keys(ORGANIZATION_VALIDATIONS)),
};

export default OGRNField;
