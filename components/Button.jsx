import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

const Button = ({
  classes, className: classNameProp, variant, color, ...props
}) => {
  const className = cn(
    classes.root,
    {
      [classes.flat]: variant === 'flat',
      [classes.flatPrimary]: color === 'primary' && variant === 'flat',
    },
    classNameProp,
  );

  return <ButtonBase className={className} {...props} />;
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
  root: {
    minWidth: '160px',
    minHeight: '35px',
    fontSize: '14px',
    textTransform: 'initial',
  },
  flat: {
    borderRadius: '25px',
  },
  flatPrimary: {
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
    '&:hover': {
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2), 0px 3px 10px rgba(0, 0, 0, 0.15)',
    },
  },
  flatSecondary: {
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
  },
}))(Button);
