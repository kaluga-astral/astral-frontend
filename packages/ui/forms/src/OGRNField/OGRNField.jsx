import PropTypes from 'prop-types';
import React from 'react';

import ORGANIZATION_TYPES from '@astral-frontend/constants/src/organizationTypes';
import { mustBeOGRN } from '@astral-frontend/validations';
import TextField from '../TextField';

const OGRNField = ({ maxLength, organizationType, ...props }) => {
  const { validateOGRN: validate = mustBeOGRN } = ORGANIZATION_TYPES[organizationType];

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
