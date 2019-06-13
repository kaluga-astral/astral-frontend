import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox as BaseCheckbox, FormHelperText, makeStyles } from '@astral-frontend/core';
import { CheckedCircleIcon, UncheckedCircleIcon } from '@astral-frontend/icons';

import FormControlLabel from '../FormControlLabel';
import FormControl from '../FormControl';

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
  const classes = useStyles({ disabled });

  return (
    <FormControl
      {...props}
      disabled={disabled}
      error={Boolean(error)}
      component="fieldset"
      className={className}
    >
      <FormControlLabel
        checked={checked}
        label={label}
        labelPlacement={labelPlacement}
        classes={{ disabled: classes.disabledLabel }}
        control={(
          <BaseCheckbox
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
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
  labelPlacement: 'end',
  className: null,
  helperText: null,
  label: '',
  error: '',
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
