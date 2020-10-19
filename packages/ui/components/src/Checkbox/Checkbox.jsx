import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Checkbox as MuiCheckbox } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';
import { CheckedRectIcon, UncheckedRectIcon } from '@astral-frontend/icons';

import FormControlLabel from '../FormControlLabel';

const useStyles = makeStyles(
  theme => ({
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
      fill: theme.palette.primary.main,

      '& :hover': {
        fill: theme.palette.primary.dark,
      },
    },
  }),
  { name: 'Checkbox' },
);

const Checkbox = ({
  disabled,
  checked,
  label,
  labelPlacement,
  className,
  helperText,
  error,
  value,
  onChange,
  onBlur,
  onFocus,
  ...props
}) => {
  const classes = useStyles();

  const ControlCheckbox = (
    <MuiCheckbox
      value={String(value)}
      color="primary"
      className={classes.checkbox}
      icon={<UncheckedRectIcon className={classes.uncheckedIcon} />}
      checkedIcon={<CheckedRectIcon className={classes.checkedIcon} />}
    />
  );

  return (
    <FormControlLabel
      {...props}
      checked={checked}
      disabled={disabled}
      label={label}
      labelPlacement={labelPlacement}
      className={cn(className, classes.root)}
      control={ControlCheckbox}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};

Checkbox.defaultProps = {
  className: null,
};

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
  labelPlacement: 'end',
  className: null,
  helperText: null,
  label: '',
  error: null,
  onBlur: null,
  onFocus: null,
};

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  labelPlacement: PropTypes.oneOf(['end', 'start', 'top', 'bottom']),
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  className: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.node,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  // eslint-disable-next-line
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
