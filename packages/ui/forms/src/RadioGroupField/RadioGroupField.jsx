import PropTypes from 'prop-types';
import React from 'react';
import { RadioGroupField as BaseRadioGroupField } from '@astral-frontend/components';

import Field from '../Field';

const RadioGroupField = ({
  fullWidth,
  row,
  className,
  groupLabel,
  labelPlacement,
  options,
  ...props
}) => {
  return (
    <Field
      {...props}
      render={({ error, onChange, ...inputProps }) => (
        <BaseRadioGroupField
          {...inputProps}
          fullWidth={fullWidth}
          isError={Boolean(error)}
          className={className}
          groupLabel={groupLabel}
          labelPlacement={labelPlacement}
          row={row}
          options={options}
          onChange={event => {
            onChange(event.target.value);
          }}
        />
      )}
    />
  );
};

RadioGroupField.defaultProps = {
  fullWidth: false,
  row: false,
  labelPlacement: 'end',
  className: null,
  groupLabel: null,
};

RadioGroupField.propTypes = {
  fullWidth: PropTypes.bool,
  row: PropTypes.bool,
  labelPlacement: PropTypes.oneOf(['end', 'start', 'top', 'bottom']),
  className: PropTypes.string,
  /** Главный label === Mui FormLabel */
  groupLabel: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default RadioGroupField;
