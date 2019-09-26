import PropTypes from 'prop-types';
import React from 'react';
import { ORGANIZATION_VALIDATIONS_PARAMS } from '@astral-frontend/validations/src/constants';
import TextField from '../TextField';

const INNField = ({ organizationType, ...props }) => {
  const { validateInn: validate, ...validationParams } = ORGANIZATION_VALIDATIONS_PARAMS[
    organizationType
  ];

  return (
    <TextField
      inputProps={{ maxLength: validationParams.maxLengthINN }}
      parse={value => value.replace(/[^\d]/g, '')}
      validate={validate}
      {...props}
    />
  );
};

INNField.defaultProps = {
  name: 'inn',
  label: 'ИНН',
  placeholder: null,
  organizationType: null,
};

INNField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  organizationType: PropTypes.oneOf(Object.keys(ORGANIZATION_VALIDATIONS_PARAMS)),
};

export default INNField;
