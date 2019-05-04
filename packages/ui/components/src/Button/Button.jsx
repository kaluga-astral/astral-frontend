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
      [classes.disabledText]: disabled && variant === 'text',
      [classes.text]: variant === 'text',
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
  disabledText: {
    opacity: '0.5',
  },
  text: {
    '&:hover': {
      background: 'rgba(29, 63, 102, 0.05)',
    },
  },
  root: {
    padding: '0 10px',
    fontSize: '14px',
    fontWeight: 500,
    textTransform: 'initial',
    minHeight: '100%',
    color: theme.palette.primary.main,
  },
  small: {
    maxHeight: '32px',
  },
  medium: {
    maxHeight: '48px',
  },
  large: {
    maxHeight: '64px',
  },
}))(Button);
