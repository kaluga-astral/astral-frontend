import PropTypes from 'prop-types';
import React from 'react';
import { mustBeINN, mustBeIPINN, mustBeULINN } from '@astral-frontend/validations';

import TextField from '../TextField';
import ORGANIZATION_TYPES from '../../../constants/src/organizationTypes';

const getValidator = (organizationType) => {
  if (organizationType === Object.keys(ORGANIZATION_TYPES)[0]) {
    return mustBeIPINN;
  }
  if (organizationType === Object.keys(ORGANIZATION_TYPES)[1]) {
    return mustBeULINN;
  }
  return mustBeINN;
};

const INNField = ({
  maxLength, noValidate, organizationType, ...props
}) => (
  <TextField
    inputProps={{ maxLength }}
    parse={value => value.replace(/[^\d]/g, '')}
    validate={!noValidate && getValidator(organizationType)}
    {...props}
  />
);

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
  organizationType: PropTypes.oneOf(ORGANIZATION_TYPES),
};

export default INNField;
