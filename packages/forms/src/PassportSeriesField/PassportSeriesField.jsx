import PropTypes from 'prop-types';
import React from 'react';
import { mustBePassportSeries } from '@astral/validations';

import TextField from '../TextField';

const PassportSeriesField = props => (
  <TextField
    inputProps={{ maxLength: 4 }}
    parse={value => value.replace(/[^\d]/g, '')}
    validate={mustBePassportSeries}
    {...props}
  />
);

PassportSeriesField.defaultProps = {
  name: 'series',
  label: 'Серия',
  placeholder: null,
};

PassportSeriesField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PassportSeriesField;
