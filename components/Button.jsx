import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

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
      [classes.disabled]: disabled,
      [classes.flat]: variant === 'flat',
      [classes.rounded]: variant === 'rounded',
      [classes.float]: variant === 'float',
      [classes.primary]: color === 'primary',
      [classes.secondary]: color === 'secondary',
      [classes.small]: variant !== 'float' && size === 'small',
      [classes.medium]: variant !== 'float' && size === 'medium',
      [classes.large]: variant !== 'float' && size === 'large',
      [classes.smallFloat]: variant === 'float' && size === 'small',
      [classes.mediumFloat]: variant === 'float' && size === 'medium',
      [classes.largeFloat]: variant === 'float' && size === 'large',
    },
    classNameProp,
  );

  return <ButtonBase disabled={disabled} className={className} {...props} />;
};

Button.defaultProps = {
  color: 'primary',
  variant: 'flat',
  size: 'medium',
};

Button.propTypes = {
  classes: PropTypes.shape().isRequired,
  /**
   * Цвет
   */
  color: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Вариант использования
   */
  variant: PropTypes.oneOf(['flat', 'rounded', 'float']),
  /**
   * Размер
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default withStyles(theme => ({
  disabled: {},
  root: {
    padding: '0 10px',
    fontSize: '14px',
    textTransform: 'initial',
  },
  flat: {
    borderRadius: '25px',
    '&$disabled': {
      opacity: '.3',
    },
  },
  rounded: {
    borderRadius: '4px',
    '&$disabled': {
      opacity: '.3',
    },
  },
  float: {
    borderRadius: '50%',
    '&$disabled': {
      border: '1px solid rgba(0, 0, 0, 0.2)',
      color: 'rgba(0, 0, 0, 0.2)',
      background: theme.palette.common.white,
    },
  },
  primary: {
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
    '&:hover': {
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2), 0px 3px 10px rgba(0, 0, 0, 0.15)',
    },
  },
  secondary: {
    color: theme.palette.primary.main,
    background: theme.palette.common.white,
    border: `1px solid ${theme.palette.primary.main}`,
    '&:hover': {
      color: theme.palette.common.white,
      background: theme.palette.primary.main,
    },
  },
  small: {
    minHeight: '30px',
  },
  smallFloat: {
    height: '30px',
    width: '30px',
  },

  medium: {
    minWidth: '160px',
    minHeight: '35px',
  },
  mediumFloat: {
    height: '35px',
    width: '35px',
  },
  large: {
    minWidth: '220px',
    minHeight: '50px',
  },
  largeFloat: {
    height: '50px',
    width: '50px',
  },
}))(Button);
