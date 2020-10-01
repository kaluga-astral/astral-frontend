import PropTypes from 'prop-types';
import React from 'react';
import {
  composeValidations,
  mustBePartnerId,
} from '@astral-frontend/validations';

import TextField from '../TextField';

const PartnerIdField = ({ validate: validateProp, ...props }) => {
  const validate = React.useMemo(() => {
    return composeValidations(validateProp, mustBePartnerId);
  }, [validateProp]);
  const parse = React.useCallback(value => {
    return value.replace(/[^\d]/g, '');
  }, []);

  return (
    <TextField
      {...props}
      parse={parse}
      validate={validate}
      inputProps={{ maxLength: 10 }}
    />
  );
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
