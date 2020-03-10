import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Radio as MuiRadio } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';
import { CheckedCircleIcon, UncheckedCircleIcon } from '@astral-frontend/icons';

const useStyles = makeStyles(
  () => ({
    root: {
      display: 'inline-flex',
    },
    uncheckedIcon: {
      width: 20,
      height: 20,
      fill: 'transparent',
    },
    checkedIcon: {
      width: 20,
      height: 20,
    },
  }),
  { name: 'Checkbox' },
);

const Radio = ({
  disabled,
  checked,
  color,
  className,
  value,
  onChange,
  onBlur,
  onFocus,
  ...props
}) => {
  const classes = useStyles();

  return (
    <MuiRadio
      className={cn(classes.root, className)}
      color={color}
      checked={checked}
      disabled={disabled}
      value={String(value)}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      icon={<UncheckedCircleIcon className={classes.uncheckedIcon} />}
      checkedIcon={<CheckedCircleIcon className={classes.checkedIcon} />}
      {...props}
    />
  );
};

Radio.defaultProps = {
  disabled: false,
  checked: false,
  className: null,
  onBlur: null,
  onFocus: null,
  onChange: null,
  color: 'primary',
};

Radio.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  color: PropTypes.string,
  // eslint-disable-next-line
  value: PropTypes.any,
};

export default Radio;
