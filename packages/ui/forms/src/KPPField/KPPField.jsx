import PropTypes from 'prop-types';
import React from 'react';
import { mustBeKPP } from '@astral-frontend/validations';

import MaskField from '../MaskField';

const KPP_MASK = [/\d/, /\d/, /\d/, /\d/, /[\d|A-Z]/, /[\d|A-Z]/, /\d/, /\d/, /\d/];

const KPPField = props => <MaskField {...props} mask={KPP_MASK} validate={mustBeKPP} />;

KPPField.defaultProps = {
  name: 'kpp',
  label: 'КПП',
};

KPPField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

export default KPPField;
