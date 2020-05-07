import PropTypes from 'prop-types';
import React from 'react';

import MaskField from '../MaskField';

const OKVED_MASK = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/];

const OKVEDField = props => <MaskField mask={OKVED_MASK} {...props} />;

OKVEDField.defaultProps = {
  name: 'okved',
  label: 'ОКВЭД',
  placeholder: 'XX.XX.XX',
};

OKVEDField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default OKVEDField;
