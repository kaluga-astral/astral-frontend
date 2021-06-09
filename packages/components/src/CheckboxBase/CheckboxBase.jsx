import PropTypes from 'prop-types';
import React from 'react';
import { Checkbox } from '@astral/core';
import { CheckedRectIcon, UncheckedRectIcon } from '@astral/icons';
import { makeStyles } from '@astral/styles';

const useStyles = makeStyles(
  theme => ({
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
  { name: 'CheckboxBase' },
);

const CheckboxBase = ({ className, value, ...props }) => {
  const classes = useStyles();

  return (
    <Checkbox
      className={className}
      value={String(value)}
      icon={<UncheckedRectIcon className={classes.uncheckedIcon} />}
      checkedIcon={<CheckedRectIcon className={classes.checkedIcon} />}
      {...props}
    />
  );
};

CheckboxBase.defaultProps = {
  className: null,
  value: null,
};

CheckboxBase.propTypes = {
  className: PropTypes.string,
  // eslint-disable-next-line
  value: PropTypes.any,
};

export default CheckboxBase;
