import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

import { Fab, IconButton } from '@astral-frontend/core';
import CircularProgress from '../CircularProgress';

const defineCircularSize = size => (size === 'small' ? 12 : 16);

const Button = ({
  fetching,
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
      [classes.fetching]: fetching,
      [classes.small]: size === 'small',
      [classes.medium]: size === 'medium',
      [classes.primaryMainBackground]: variant === 'fab',
    },
    classNameProp,
  );

  const ButtonComponent = variant === 'fab' ? Fab : IconButton;

  return (
    <ButtonComponent disabled={disabled || fetching} className={className} {...props}>
      {fetching
        ? <CircularProgress className={classes.loader} size={defineCircularSize(size)} />
        : children
      }
    </ButtonComponent>
  );
};

Button.defaultProps = {
  className: null,
  disabled: false,
  fetching: false,
  color: 'primary',
  variant: 'text',
  size: 'medium',
};

Button.propTypes = {
  disabled: PropTypes.bool,
  fetching: PropTypes.bool,
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
    minHeight: '100%',
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
  fetching: {
    color: 'transparent',
  },
}))(Button);
