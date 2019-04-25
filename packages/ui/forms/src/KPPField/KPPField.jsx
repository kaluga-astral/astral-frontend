import PropTypes from 'prop-types';
import React from 'react';
import { mustBeKPP } from '@astral-frontend/validations';

import TextField from '../TextField';

const KPPField = props => (
  <TextField
    inputProps={{ maxLength: 9 }}
    parse={value => value.replace(/[^\d]/g, '')}
    validate={mustBeKPP}
    {...props}
  />
);

KPPField.defaultProps = {
  name: 'kpp',
  label: 'КПП',
  placeholder: null,
};

KPPField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default KPPField;
