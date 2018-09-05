import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

const Button = ({
  disabled, classes, className: classNameProp, variant, color, ...props
}) => {
  const className = cn(
    classes.root,
    {
      [classes.disabled]: disabled,
      [classes.flat]: variant === 'flat',
      [classes.rounded]: variant === 'rounded',
      [classes.fab]: variant === 'fab',
      [classes.primary]: color === 'primary',
      [classes.secondary]: color === 'secondary',
    },
    classNameProp,
  );

  return <ButtonBase disabled={disabled} className={className} {...props} />;
};

Button.defaultProps = {
  color: 'primary',
  variant: 'flat',
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
  variant: PropTypes.oneOf(['flat', 'rounded', 'fab']),
};

export default withStyles(theme => ({
  disabled: {},
  root: {
    padding: '0 10px',
    fontSize: '14px',
    textTransform: 'initial',
  },
  flat: {
    minWidth: '160px',
    minHeight: '35px',
    borderRadius: '25px',
    '&$disabled': {
      opacity: '.3',
    },
  },
  rounded: {
    minWidth: '160px',
    minHeight: '35px',
    borderRadius: '4px',
    '&$disabled': {
      opacity: '.3',
    },
  },
  fab: {
    height: '35px',
    width: '35px',
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
}))(Button);
