import PropTypes from 'prop-types';
import React from 'react';

import MaskField from '../MaskField';

const OKVED_MASK = '99.99.99';

const OKVEDField = props => (
  <MaskField alwaysShowMask mask={OKVED_MASK} maskChar="X" {...props} />
);

OKVEDField.defaultProps = {
  name: 'okved',
  label: 'ОКВЭД',
};

OKVEDField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

export default OKVEDField;
