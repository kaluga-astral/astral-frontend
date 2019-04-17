import PropTypes from 'prop-types';
import React from 'react';
import { mustBeSNILS } from '@astral-frontend/validations';

import TextField from '../TextField';
import SNILSFieldMask from './SNILSFieldMask';

const SNILSField = props => (
  <TextField
    validate={mustBeSNILS}
    InputProps={{
      inputComponent: SNILSFieldMask,
    }}
    {...props}
  />
);

SNILSField.defaultProps = {
  name: 'snils',
  label: 'СНИЛС',
  placeholder: null,
};

SNILSField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default SNILSField;
