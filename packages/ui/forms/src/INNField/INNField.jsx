import PropTypes from 'prop-types';
import React from 'react';
// import { mustBeINN } from '@astral-frontend/validations';
import { ORGANIZATION_VALIDATIONS_PARAMS } from '@astral-frontend/validations/src/constants';

import TextField from '../TextField';

const INNField = ({ noValidate, organizationType, ...props }) => {
  // const {
  //   validate,
  //   validationParams: { maxLength },
  // } = React.useMemo(() => {
  //   console.log(organizationType, ORGANIZATION_VALIDATIONS_PARAMS[organizationType]);
  //   const { validateInn, ...validationParams } = ORGANIZATION_VALIDATIONS_PARAMS[organizationType];

  //   return {
  //     validate: validateInn.bind(validationParams),
  //     validationParams,
  //   };
  // }, [organizationType]);
  const { validateInn: validate, ...validationParams } = ORGANIZATION_VALIDATIONS_PARAMS[
    organizationType
  ];

  // console.log(validate, maxLength);

  return (
    <TextField
      inputProps={{ maxLength: validationParams.maxLength }}
      parse={value => value.replace(/[^\d]/g, '')}
      validate={!noValidate && validate}
      {...props}
    />
  );
};

INNField.defaultProps = {
  noValidate: false,
  name: 'inn',
  label: 'ИНН',
  placeholder: null,
  organizationType: null,
};

INNField.propTypes = {
  noValidate: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  organizationType: PropTypes.oneOf(Object.keys(ORGANIZATION_VALIDATIONS_PARAMS)),
};

export default INNField;
