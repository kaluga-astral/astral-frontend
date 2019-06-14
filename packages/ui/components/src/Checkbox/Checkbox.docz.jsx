/* eslint-disable */
import React, { useState } from 'react';
import Checkbox from './Checkbox';

const CheckboxBaseExample = () => {
  const checkboxValue = 'check A value';
  const [currentValue, setCurrentValue] = useState(null);

  console.log('check A value', currentValue);

  return (
    <Checkbox
      checked={currentValue === checkboxValue}
      value={checkboxValue}
      onChange={(event) => {
        const { target } = event;
        const { checked, value } = target;

        if (checked) setCurrentValue(value);
        if (!checked) setCurrentValue(null);
      }}
    />
  );
};

const CheckboxExtendedExample = ({
  disabled, label, labelPlacement, checkboxValue, error, helperText,
}) => {
  const [currentValue, setCurrentValue] = useState(null);

  console.log('check B value', currentValue);

  return (
    <Checkbox
      disabled={disabled}
      checked={currentValue === checkboxValue}
      label={label}
      error={error}
      helperText={helperText}
      labelPlacement={labelPlacement}
      value={checkboxValue}
      onChange={(event) => {
        const { target } = event;
        const { checked, value } = target;

        if (checked) setCurrentValue(value);
        if (!checked) setCurrentValue(null);
      }}
    />
  );
};

export { CheckboxBaseExample, CheckboxExtendedExample };
