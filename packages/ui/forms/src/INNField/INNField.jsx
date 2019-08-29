import PropTypes from 'prop-types';
import React from 'react';
import { mustBeINN, mustBeIPINN, mustBeULINN } from '@astral-frontend/validations';

import TextField from '../TextField';
import ORGANIZATION_TYPES from '../../../constants/src/organizationStatuses';

const getValidator = (type) => {
  if (type === 'ip') {
    return mustBeIPINN;
  }
  if (type === 'ul') {
    return mustBeULINN;
  }
  if (type === 'both') {
    return mustBeINN;
  }

  throw new Error('Unknow property type', type);
};

const INNField = ({ maxLength, noValidate, ...props }) => {
  const { type } = { ...props };
  return (
    <TextField
      inputProps={{ maxLength }}
      parse={value => value.replace(/[^\d]/g, '')}
      validate={!noValidate && getValidator(type)}
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
  type: 'both',
};

INNField.propTypes = {
  noValidate: PropTypes.bool,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(ORGANIZATION_TYPES),
};

export default INNField;
