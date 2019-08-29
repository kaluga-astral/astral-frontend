import PropTypes from 'prop-types';
import React from 'react';
import { mustBeOGRN, mustBeOGRNIP, mustBeOGRNUL } from '@astral-frontend/validations';

import TextField from '../TextField';
import ORGANIZATION_TYPES from '../../../constants/src/organizationTypes';

const getValidator = (organizationType) => {
  if (organizationType === 'ip') {
    return mustBeOGRNIP;
  }
  if (organizationType === 'ul') {
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
