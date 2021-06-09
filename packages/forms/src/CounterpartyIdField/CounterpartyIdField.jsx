import PropTypes from 'prop-types';
import React from 'react';
import {
  composeValidations,
  mustBeCounterpartyId,
} from '@astral/validations';

import TextField from '../TextField';

const CounterpartyIdField = ({ validate: validateProp, ...props }) => {
  const parse = React.useCallback(value => {
    return value
      .trim()
      .replace(/[а-яА-Я]/, '')
      .toUpperCase();
  }, []);
  const validate = React.useMemo(() => {
    return composeValidations(validateProp, mustBeCounterpartyId);
  }, [validateProp]);

  return <TextField {...props} validate={validate} parse={parse} />;
};

CounterpartyIdField.defaultProps = {
  name: 'counterpartyId',
  label: 'Идентификатор участника ЭДО',
  validate: null,
};

CounterpartyIdField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  validate: PropTypes.func,
};

export default CounterpartyIdField;
