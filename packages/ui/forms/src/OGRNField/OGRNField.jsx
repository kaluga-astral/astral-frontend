/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';
import { mustBeOGRN } from '@astral-frontend/validations';
import { ORGANIZATION_VALIDATIONS_PARAMS } from '@astral-frontend/validations/src/constants';
import TextField from '../TextField';

const OGRNField = ({ organizationType, ...props }) => {
  const { validateOGRN: validate = mustBeOGRN, maxLengthOGRN: maxLengthOGRN = 15 } = ORGANIZATION_VALIDATIONS_PARAMS[organizationType] || {};

  return (
    <TextField
      inputProps={{ maxLengthOGRN }}
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
