import PropTypes from 'prop-types';
import React from 'react';
import { mustBeINN, mustBeIPINN, mustBeULINN } from '@astral-frontend/validations';

import TextField from '../TextField';

// const ORGANIZATION_TYPES = []; perenesti v constansts

const getValidator = (variant) => {
  if (variant === 'ip') {
    return mustBeIPINN;
  }
  if (variant === 'ul') {
    return mustBeULINN;
  }
  if (variant === 'both') {
    return mustBeINN;
  }

  throw new Error('Unknow property variant', variant);
};

const INNField = ({ maxLength, noValidate, ...props }) => (
  <TextField
    inputProps={{ maxLength }}
    parse={value => value.replace(/[^\d]/g, '')}
    validate={!noValidate && getValidator}
    {...props}
  />
);

INNField.defaultProps = {
  noValidate: false,
  name: 'inn',
  label: 'ИНН',
  maxLength: 12,
  placeholder: null,
  variant: 'both',
};

INNField.propTypes = {
  noValidate: PropTypes.bool,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(['ul', 'ip', 'both']),
};

export default INNField;
