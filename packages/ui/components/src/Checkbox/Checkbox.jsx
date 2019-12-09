import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox as MuiCheckbox, makeStyles } from '@astral-frontend/core';
import { CheckedCircleIcon, UncheckedCircleIcon } from '@astral-frontend/icons';

import FormControlLabel from '../FormControlLabel';

/* eslint-disable */
const getIconColor = theme => ({ disabled }) =>
  disabled ? theme.palette.grey[500] : theme.palette.primary.main;
/* eslint-enable */

const useStyles = makeStyles(
  theme => ({
    checkedIcon: {
      width: 20,
      height: 20,
      fill: getIconColor(theme),
    },
    uncheckedIcon: {
      width: 20,
      height: 20,
      stroke: getIconColor(theme),
      fill: 'transparent',
    },
    noLabel: {
      margin: 0,
    },
    endLabel: {
      marginLeft: -9,
    },
  }),
  { withTheme: true },
);

const END_LABEL_PLACEMENT = 'end';

const Checkbox = ({
  disabled,
  checked,
  label,
  labelPlacement,
  className,
  value,
  onChange,
  onBlur,
  onFocus,
  ...props
}) => {
  const classes = useStyles({ disabled });
  const endLabelPlacement = labelPlacement === END_LABEL_PLACEMENT;

  return (
    <FormControlLabel
      {...props}
      checked={checked}
      disabled={disabled}
      label={label}
      labelPlacement={labelPlacement}
      className={className}
      classes={{
        root: endLabelPlacement && label ? classes.endLabel : classes.noLabel,
      }}
      control={
        <MuiCheckbox
          value={String(value)}
          color="primary"
          className={classes.checkbox}
          icon={<UncheckedCircleIcon className={classes.uncheckedIcon} />}
          checkedIcon={<CheckedCircleIcon className={classes.checkedIcon} />}
        />
      }
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
  labelPlacement: 'end',
  className: null,
  label: '',
  onBlur: null,
  onFocus: null,
};

Checkbox.propTypes = {
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

export default Checkbox;
