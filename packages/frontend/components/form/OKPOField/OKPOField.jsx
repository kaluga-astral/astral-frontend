import PropTypes from 'prop-types';
import React from 'react';
import { mustBeOKPO } from '@astral-frontend/validations';

import TextField from '../TextField';

const OKPOField = props => (
  <TextField
    inputProps={{ maxLength: 14 }}
    parse={value => value.replace(/[^\d]/g, '')}
    validate={mustBeOKPO}
    {...props}
  />
);

OKPOField.defaultProps = {
  name: 'okpo',
  label: 'ОКПО',
  placeholder: null,
};

OKPOField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default OKPOField;
