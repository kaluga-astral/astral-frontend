import PropTypes from 'prop-types';
import React from 'react';
import { mustBeOGRN } from '@astral-frontend/validations';

import TextField from '../TextField';

const OGRNField = props => (
  <TextField parse={value => value.replace(/[^\d]/g, '')} validate={mustBeOGRN} {...props} />
);

OGRNField.defaultProps = {
  name: 'ogrn',
  label: 'ОГРН',
  placeholder: null,
};

OGRNField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default OGRNField;
