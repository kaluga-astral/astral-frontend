import PropTypes from 'prop-types';
import React from 'react';
import { mustBeOGRN, mustBeOGRNIP, mustBeOGRNUL } from '@astral-frontend/validations';

import TextField from '../TextField';
import ORGANIZATION_TYPES from '../../../constants/src/organizationStatuses';

const getValidator = (type) => {
  if (type === 'ip') {
    return mustBeOGRNIP;
  }
  if (type === 'ul') {
    return mustBeOGRNUL;
  }
  if (type === 'both') {
    return mustBeOGRN;
  }

  throw new Error('Unknow property type', type);
};

const OGRNField = (props) => {
  const { type } = { ...props };

  return (
    <TextField
      inputProps={{ maxLength: 15 }}
      parse={value => value.replace(/[^\d]/g, '')}
      validate={getValidator(type)}
      {...props}
    />
  );
};

OGRNField.defaultProps = {
  name: 'ogrn',
  label: 'ОГРН',
  placeholder: null,
  type: 'both',
};

OGRNField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(ORGANIZATION_TYPES),
};

export default OGRNField;
