import PropTypes from 'prop-types';
import React from 'react';

import MaskField from '../MaskField';

const OKATO_MASK = '99 999 999 999';

const OKATOField = props => <MaskField mask={OKATO_MASK} {...props} />;

OKATOField.defaultProps = {
  name: 'okato',
  label: 'ОКАТО',
  placeholder: '00 000 000 000',
};

OKATOField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default OKATOField;
