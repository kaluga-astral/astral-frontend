import PropTypes from 'prop-types';
import React from 'react';

import MaskField from '../MaskField';

const OKPD_MASK = [
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
];

const OKPDField = props => <MaskField mask={OKPD_MASK} {...props} />;

OKPDField.defaultProps = {
  name: 'okpd',
  label: 'ОКПД',
  placeholder: 'XX.XX.XX.XXX',
};

OKPDField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default OKPDField;
