import PropTypes from 'prop-types';
import React from 'react';
import { mustBeKPP } from '@astral-frontend/validations';

import MaskField from '../MaskField';

const ORGANIZATION_VARIANT = 'organization';
const ORGANIZATION_MASK = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /[\d|A-Z]/,
  /[\d|A-Z]/,
  /\d/,
  /\d/,
];
const OTHERS_MASK = new Array(9).fill(/\d/);

const getMaskByVariant = variant => (variant === ORGANIZATION_VARIANT
  ? ORGANIZATION_MASK : OTHERS_MASK);

const KPPField = ({ variant, ...props }) => (
  <MaskField
    mask={getMaskByVariant(variant)}
    validate={mustBeKPP}
    {...props}
  />
);

KPPField.defaultProps = {
  name: 'kpp',
  label: 'КПП',
  variant: 'others',
};

KPPField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.oneOf(['others', ORGANIZATION_VARIANT]),
};

export default KPPField;
