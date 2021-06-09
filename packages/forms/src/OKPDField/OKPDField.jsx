import PropTypes from 'prop-types';
import React from 'react';

import MaskField from '../MaskField';

const OKPD_MASK = '99.99.99.999';

const OKPDField = props => (
  <MaskField mask={OKPD_MASK} maskChar="X" {...props} />
);

OKPDField.defaultProps = {
  name: 'okpd',
  label: 'ОКПД',
};

OKPDField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

export default OKPDField;
