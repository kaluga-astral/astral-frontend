/* eslint-disable */
import React from 'react';
import Checkbox from './CheckboxField';

const LabelCheckbox = ({
  name, disabled, label, labelPlacement, ...props
}) => (
  <Checkbox
    {...props}
    name={name}
    disabled={disabled}
    label={label}
    labelPlacement={labelPlacement}
  />
);

export { LabelCheckbox };
