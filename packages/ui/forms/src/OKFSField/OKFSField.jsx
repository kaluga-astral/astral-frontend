import PropTypes from 'prop-types';
import React from 'react';

import MaskField from '../MaskField';

const OKFS_MASK = [/\d/, /\d/];

const OKFSField = props => <MaskField mask={OKFS_MASK} {...props} />;

OKFSField.defaultProps = {
  name: 'okfs',
  label: 'ОКФС',
  placeholder: '00',
};

OKFSField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default OKFSField;
