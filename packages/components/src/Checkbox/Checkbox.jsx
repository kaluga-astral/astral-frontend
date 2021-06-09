import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Checkbox as MuiCheckbox } from '@astral/core';
import { makeStyles } from '@astral/styles';
import { CheckedRectIcon, UncheckedRectIcon } from '@astral/icons';

import FormControlLabel from '../FormControlLabel';

const useStyles = makeStyles(
  theme => ({
    root: {
      margin: 0,
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
    },
  }),
  { name: 'Checkbox' },
);

const Checkbox = ({ className, value, ...props }) => {
  const classes = useStyles();

  const ControlCheckbox = (
    <MuiCheckbox
      value={String(value)}
      color="primary"
      icon={<UncheckedRectIcon className={classes.uncheckedIcon} />}
      checkedIcon={<CheckedRectIcon className={classes.checkedIcon} />}
    />
  );

  return (
    <FormControlLabel
      {...props}
      className={cn(className, classes.root)}
      control={ControlCheckbox}
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
