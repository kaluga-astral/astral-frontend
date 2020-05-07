import PropTypes from 'prop-types';
import React from 'react';
import { mustBeOKTMO } from '@astral-frontend/validations';

import MaskField from '../MaskField';

const OKTMO_MASK = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const OKTMOField = props => (
  <MaskField validate={mustBeOKTMO} mask={OKTMO_MASK} {...props} />
);

OKTMOField.defaultProps = {
  name: 'oktmo',
  label: 'ОКТМО',
  placeholder: '00000000000',
};

OKTMOField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default OKTMOField;
