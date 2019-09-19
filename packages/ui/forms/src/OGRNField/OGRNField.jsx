/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';
import { mustBeOGRN } from '@astral-frontend/validations';
import ORGANIZATION_VALIDATIONS_PARAMS from '@astral-frontend/validations/src/constants';
import TextField from '../TextField';

const OGRNField = ({ maxLength, organizationType, ...props }) => (
  <TextField
    inputProps={{ maxLength }}
    parse={value => value.replace(/[^\d]/g, '')}
    validate={mustBeOGRN}
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
  organizationType: PropTypes.oneOf(Object.keys(ORGANIZATION_VALIDATIONS_PARAMS)),
};

export default OGRNField;
