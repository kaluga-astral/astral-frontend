import PropTypes from 'prop-types';
import React from 'react';
import { mustBeOGRN } from '@astral-frontend/validations';

import TextField from '../TextField';

const KPPField = props => (
  <TextField parse={value => value.replace(/[^\d]/g, '')} validate={mustBeOGRN} {...props} />
);

KPPField.defaultProps = {
  name: 'ogrn',
  label: 'ОГРН',
  placeholder: null,
};

KPPField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default KPPField;
