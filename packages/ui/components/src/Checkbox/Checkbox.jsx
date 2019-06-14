import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox as MuiCheckbox, makeStyles } from '@astral-frontend/core';
import { CheckedCircleIcon, UncheckedCircleIcon } from '@astral-frontend/icons';

import FormControlLabel from '../FormControlLabel';

const useStyles = makeStyles(theme => ({
  checkedIcon: {
    width: 20,
    height: 20,
    fill: theme.palette.primary.main,
  },
  uncheckedIcon: {
    width: 20,
    height: 20,
    stroke: ({ disabled }) => (disabled ? theme.palette.grey[500] : theme.palette.primary.main),
    fill: 'transparent',
  },
  disabledLabel: {
    cursor: 'not-allowed !important',
  },
}), { withTheme: true });

const BaseCheckbox = ({
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
      label={label}
      labelPlacement={labelPlacement}
      className={className}
      classes={{ disabled: classes.disabledLabel }}
      control={(
        <MuiCheckbox
          value={String(value)}
          color="primary"
          className={classes.checkbox}
          icon={<UncheckedCircleIcon className={classes.uncheckedIcon} />}
          checkedIcon={<CheckedCircleIcon className={classes.checkedIcon} />}
        />
      )}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};

BaseCheckbox.defaultProps = {
  disabled: false,
  checked: false,
  labelPlacement: 'end',
  className: null,
  label: '',
  onBlur: null,
  onFocus: null,
};

BaseCheckbox.propTypes = {
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

export default BaseCheckbox;
