import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

import ButtonBase from '../ButtonBase';

const Button = ({
  disabled,
  classes,
  className: classNameProp,
  variant,
  color,
  size,
  ...props
}) => {
  const className = cn(
    classes.root,
    {
      [classes.disabledText]: disabled && (variant === 'text' || variant === 'textBlock'),
      [classes.text]: variant === 'text',
      [classes.textBlock]: variant === 'textBlock',
      [classes.regular]: variant === 'regular',
      [classes.primaryMainBackground]:
        color === 'primary' && (variant !== 'text' && variant !== 'textBlock'),
      [classes.small]: size === 'small',
      [classes.medium]: size === 'medium',
      [classes.large]: size === 'large',
    },
    classNameProp,
  );

  return <ButtonBase disabled={disabled} className={className} {...props} />;
};

Button.defaultProps = {
  className: null,
  disabled: false,
  color: 'primary',
  variant: 'text',
  size: 'medium',
};

Button.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  /**
   * Цвет
   */
  color: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Вариант использования
   */
  variant: PropTypes.oneOf(['regular', 'text', 'regularBlock', 'textBlock']),
  /**
   * Размер
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default withStyles(theme => ({
  root: {
    padding: '0 10px',
    fontSize: '14px',
    fontWeight: 500,
    textTransform: 'initial',
    minHeight: '100%',
    color: theme.palette.primary.main,
  },
  disabledText: {
    opacity: '0.5',
  },
  text: {
    borderRadius: '4px',
    '&:hover': {
      background: 'rgba(29, 63, 102, 0.05)',
    },
  },
  textBlock: {
    '&:hover': {
      background: 'rgba(29, 63, 102, 0.05)',
    },
  },
  regular: {
    borderRadius: '4px',
  },
  small: {
    minHeight: '32px',
  },
  medium: {
    minHeight: '48px',
    height: '100%',
  },
  large: {
    minHeight: '64px',
    minWidth: '160px',
  },
  primaryMainBackground: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}))(Button);
