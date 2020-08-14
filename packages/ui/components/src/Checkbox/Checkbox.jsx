import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox as MuiCheckbox } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';
import { CheckedRectIcon, UncheckedRectIcon } from '@astral-frontend/icons';

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

const Checkbox = ({ className, ...props }) => {
  const classes = useStyles();

  return (
    <MuiCheckbox
      color="primary"
      {...props}
      className={cn(classes.root, className)}
      icon={<UncheckedRectIcon className={classes.uncheckedIcon} />}
      checkedIcon={<CheckedRectIcon className={classes.checkedIcon} />}
    />
  );
};

Checkbox.defaultProps = {
  className: null,
};

Checkbox.propTypes = {
  className: PropTypes.string,
};

export default Checkbox;
