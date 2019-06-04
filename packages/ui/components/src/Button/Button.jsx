import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

import ButtonBase from '../ButtonBase';
import CircularProgress from '../CircularProgress';


const getIsBlockVariant = variant => (variant === 'text' || variant === 'textBlock');
const getIsTextVariant = variant => (variant === 'textBlock' || variant === 'regularBlock');

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
  const isTextVariant = getIsBlockVariant(variant);
  const isBlockVariant = getIsTextVariant(variant);

  const className = cn(
    classes.root,
    {
      [classes.disabledText]: disabled && isTextVariant,
      [classes.disabledBlock]: disabled && !isTextVariant,
      [classes.loading]: loading,
      [classes.text]: variant === 'text',
      [classes.textBlock]: variant === 'textBlock',
      [classes.regular]: variant === 'regular',
      [classes.regularBlock]: variant === 'regularBlock',
      [classes.primaryMainBackground]:
        color === 'primary' && !isTextVariant,
      [classes.small]: size === 'small' && !isBlockVariant,
      [classes.medium]: size === 'medium' && !isBlockVariant,
      [classes.large]: size === 'large' && !isBlockVariant,
      [classes.smallBlock]: size === 'small' && isBlockVariant,
      [classes.mediumBlock]: size === 'medium' && isBlockVariant,
      [classes.largeBlock]: size === 'large' && isBlockVariant,
    },
    classNameProp,
  );

  return (
    <div className={classes.wrapper}>
      <ButtonBase disabled={disabled || loading} className={className} {...props}>
        {children}
      </ButtonBase>
      {loading ? <CircularProgress className={classes.loader} size={20} /> : null}
    </div>
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
  variant: PropTypes.oneOf(['text', 'textBlock', 'regular', 'regularBlock']),
  /**
   * Размер
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default withStyles(theme => ({
  root: {
    padding: '0 20px',
    fontSize: '14px',
    fontWeight: 500,
    textTransform: 'initial',
    minHeight: '100%',
    color: theme.palette.text.primary,
  },
  text: {
    borderRadius: '4px',
    '&:hover': {
      background: theme.palette.grey[100],
    },
  },
  textBlock: {
    '&:hover': {
      background: theme.palette.grey[100],
    },
  },
  regular: {
    borderRadius: '4px',
  },
  regularBlock: {

  },
  small: {
    minHeight: '32px',
  },
  medium: {
    minHeight: '40px',
  },
  large: {
    minHeight: '48px',
  },
  smallBlock: {
    minHeight: '32px',
  },
  mediumBlock: {
    minHeight: '48px',
  },
  largeBlock: {
    minHeight: '64px',
  },
  primaryMainBackground: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,

    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  wrapper: {
    display: 'inline-flex',
    position: 'relative',
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-10px',
    marginLeft: '-10px',
    color: theme.palette.primary.main,
  },
  disabledText: {
    opacity: '0.5',
  },
  disabledBlock: {
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.grey[500],
  },
  loading: {
    color: 'transparent',
    backgroundColor: theme.palette.grey[100],
  },
}))(Button);
