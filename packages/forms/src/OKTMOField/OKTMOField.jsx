import PropTypes from 'prop-types';
import React from 'react';
import { mustBeOKTMO } from '@astral/validations';

import MaskField from '../MaskField';

const OKTMO_MASK = new Array(11).fill(9).join('');

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
