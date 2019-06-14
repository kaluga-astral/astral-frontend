/* eslint-disable */
import React, { useState } from 'react';
import Radio from './Radio';

const RadioBaseExample = () => {
  const [currentValue, setCurrentValue] = useState(null);

  const handleChange = event => {
    const { target } = event;

    console.log('radio value', target.value);

    setCurrentValue(target.value);
  };

  return (
    <>
      <Radio
        checked={currentValue === 'a'}
        value="a"
        onChange={handleChange}
      />
      <Radio
        checked={currentValue === 'b'}
        value="b"
        onChange={handleChange}
      />
    </>
  );
};

const RadioExtendedExample = ({ disabled, label, labelPlacement }) => {
  return (
    <Radio
      checked
      disabled={disabled}
      value="a"
      label={label}
      labelPlacement={labelPlacement}
      onChange={() => null}
    />
  );
};

export { RadioBaseExample, RadioExtendedExample };
