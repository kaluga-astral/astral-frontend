import PropTypes from 'prop-types';
import React from 'react';

import MaskField from '../MaskField';

const OKOPF_MASK = '9 99 99';

const OKOPFField = props => <MaskField mask={OKOPF_MASK} {...props} />;

OKOPFField.defaultProps = {
  name: 'okopf',
  label: 'ОКОПФ',
  placeholder: '0 00 00',
};

OKOPFField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default OKOPFField;
