/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

import ORGANIZATION_TYPES_VALIDATIONS from '@astral-frontend/constants/src/organizationTypesValidations';
import { mustBeINN } from '@astral-frontend/validations';
import TextField from '../TextField';

const INNField = ({
  maxLength, noValidate, organizationType, ...props
}) => {
  const { validateINN: validate = mustBeINN } = ORGANIZATION_TYPES_VALIDATIONS[organizationType] || {};

  return (
    <TextField
      inputProps={{ maxLength }}
      parse={value => value.replace(/[^\d]/g, '')}
      validate={!noValidate && validate}
      {...props}
    />
  );
};

INNField.defaultProps = {
  noValidate: false,
  name: 'inn',
  label: 'ИНН',
  maxLength: 12,
  placeholder: null,
  organizationType: null,
};

INNField.propTypes = {
  noValidate: PropTypes.bool,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  organizationType: PropTypes.oneOf(ORGANIZATION_TYPES_VALIDATIONS),
};

export default INNField;
