/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';
import ORGANIZATION_VALIDATIONS_PARAMS from '@astral-frontend/constants/src/organization/organizationValidationsParams';
import ORGANIZATION_VALIDATIONS from '@astral-frontend/constants/src/organization/organizationValidations';
import { mustBeINN } from '@astral-frontend/validations';
import TextField from '../TextField';

const INNField = ({
  maxLength, noValidate, organizationType, ...props
}) => {
  const { validateINN: validate = mustBeINN } = ORGANIZATION_VALIDATIONS[organizationType] || {};

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
  maxLength: ORGANIZATION_VALIDATIONS_PARAMS.individualEntrepreneur.maxLengthINN,
  placeholder: null,
  organizationType: null,
};

INNField.propTypes = {
  noValidate: PropTypes.bool,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  organizationType: PropTypes.oneOf(ORGANIZATION_VALIDATIONS),
};

export default INNField;
