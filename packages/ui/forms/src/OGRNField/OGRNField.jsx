import PropTypes from 'prop-types';
import React from 'react';
import { mustBeOGRN, mustBeOGRNIP, mustBeOGRNUL } from '@astral-frontend/validations';

import ORGANIZATION_TYPES from '@astral-frontend/constants/src/organizationTypes';
import TextField from '../TextField';

const getValidator = (organizationType) => {
  if (organizationType === Object.keys(ORGANIZATION_TYPES).ip) {
    return mustBeOGRNIP;
  }
  if (organizationType === Object.keys(ORGANIZATION_TYPES).ul) {
    return mustBeOGRNUL;
  }
  return mustBeOGRN;
};

const OGRNField = ({ maxLength, organizationType, ...props }) => (
  <TextField
    inputProps={{ maxLength }}
    parse={value => value.replace(/[^\d]/g, '')}
    validate={getValidator(organizationType)}
    {...props}
  />
);

OGRNField.defaultProps = {
  name: 'ogrn',
  label: 'ОГРН',
  maxLength: 15,
  placeholder: null,
  organizationType: null,
};

OGRNField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  organizationType: PropTypes.oneOf(Object.keys(ORGANIZATION_TYPES)),
};

export default OGRNField;
