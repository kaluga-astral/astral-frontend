import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

import { Fab, IconButton } from '@astral-frontend/core';
import CircularProgress from '../CircularProgress';

const SMALL_CIRCULAR_SIZE = 12;
const MEDIUM_CIRCULAR_SIZE = 16;
const getSizeOfCircularProgress = size => (size === 'small' ? SMALL_CIRCULAR_SIZE : MEDIUM_CIRCULAR_SIZE);

const Button = ({
  loading,
  disabled,
  classes,
  className: classNameProp,
  variant,
  color,
  size,
  children,
  ...props
}) => {
  const className = cn(
    classes.root,
    {
      [classes.loading]: loading,
      [classes.small]: size === 'small',
      [classes.medium]: size === 'medium',
      [classes.primaryMainBackground]: variant === 'fab',
    },
    classNameProp,
  );

  const Component = variant === 'fab' ? Fab : IconButton;

  return (
    <Component disabled={disabled || loading} className={className} {...props}>
      {loading
        ? <CircularProgress className={classes.loader} size={getSizeOfCircularProgress(size)} />
        : children
      }
    </Component>
  );
};

Button.defaultProps = {
  className: null,
  disabled: false,
  loading: false,
  color: 'primary',
  variant: 'text',
  size: 'medium',
};

Button.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  /**
   * Цвет
   */
  color: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Вариант использования
   */
  variant: PropTypes.oneOf(['regular', 'fab']),
  /**
   * Размер
   */
  size: PropTypes.oneOf(['small', 'medium']),
};

export default withStyles(theme => ({
  root: {
    textTransform: 'initial',
    fontSize: 0,
    minHeight: 'auto',
    boxShadow: 'none',
    padding: 0,
    color: theme.palette.primary.main,
  },
  small: {
    height: '24px',
    width: '24px',
  },
  medium: {
    height: '32px',
    width: '32px',
  },
  primaryMainBackground: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,

    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  loading: {
    color: 'transparent',
  },
}))(Button);
