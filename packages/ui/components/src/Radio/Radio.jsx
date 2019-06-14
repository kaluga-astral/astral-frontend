import React from 'react';
import PropTypes from 'prop-types';
import { Radio as BaseRadio, makeStyles } from '@astral-frontend/core';

import FormControlLabel from '../FormControlLabel';

const useStyles = makeStyles({
  disabledLabel: {
    cursor: 'not-allowed !important',
  },
});

const Radio = ({
  disabled,
  checked,
  label,
  labelPlacement,
  className,
  value,
  onChange,
  onBlur,
  onFocus,
}) => {
  const classes = useStyles({ disabled });

  return (
    <FormControlLabel
      checked={checked}
      disabled={disabled}
      color="primary"
      className={className}
      label={label}
      labelPlacement={labelPlacement}
      classes={{ disabled: classes.disabledLabel }}
      control={(
        <BaseRadio
          value={String(value)}
          color="primary"
        />
        )}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};

Radio.defaultProps = {
  disabled: false,
  checked: false,
  labelPlacement: 'end',
  className: null,
  label: '',
  onBlur: null,
  onFocus: null,
};

Radio.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  labelPlacement: PropTypes.oneOf(['end', 'start', 'top', 'bottom']),
  className: PropTypes.string,
  label: PropTypes.node,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  // eslint-disable-next-line
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default Radio;
