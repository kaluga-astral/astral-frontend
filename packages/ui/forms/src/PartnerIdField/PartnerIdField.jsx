import PropTypes from 'prop-types';
import React from 'react';
import {
  composeValidations,
  mustBePartnerId,
} from '@astral-frontend/validations';

import NumberField from '../NumberField';

const PartnerIdField = ({ validate: validateProp, ...props }) => {
  const validate = React.useMemo(() => {
    return composeValidations(validateProp, mustBePartnerId);
  }, [validateProp]);

  return <NumberField {...props} validate={validate} />;
};

PartnerIdField.defaultProps = {
  name: 'partnerCode',
  label: 'Код обслуживающей организации',
  validate: null,
};

PartnerIdField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  validate: PropTypes.func,
};

export default PartnerIdField;
