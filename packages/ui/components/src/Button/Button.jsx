import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

import ButtonBase from '../ButtonBase';
import CircularProgress from '../CircularProgress';

import Content from './Content';

const useStyles = makeStyles((theme) => {
  const getMinHeight = ({ size }) => {
    switch (size) {
      case 'extraSmall':
        return '20px';
      case 'small':
        return '32px';
      case 'medium':
        return '40px';
      case 'large':
        return '48px';
      default:
        return null;
    }
  };
  const getPadding = ({ size }) => {
    if (size === 'extraSmall') {
      return '3px 10px';
    }

    return '5px 20px';
  };
  const getBorderRadius = ({ variant }) => {
    if (variant === 'textBlock' || variant === 'regularBlock') {
      return '0';
    }

    return '4px';
  };
  const getFontSize = ({ size }) => {
    if (size === 'extraSmall') {
      return '10px';
    }
    if (size === 'small') {
      return '12px';
    }

    return '14px';
  };
  const getBackgroundColor = ({ disabled, loading, variant }) => {
    if (variant === 'text' || variant === 'textBlock') {
      return null;
    }

    if (disabled || loading) {
      return theme.palette.grey[100];
    }

    if (variant === 'regular' || variant === 'regularBlock') {
      return theme.palette.primary.main;
    }

    return null;
  };
  const getColor = ({ disabled, loading, variant }) => {
    if (variant === 'regular' || variant === 'regularBlock') {
      if (disabled) {
        return theme.palette.grey[400];
      }

      if (loading) {
        return theme.palette.grey[100];
      }

      return theme.palette.common.white;
    }

    if (variant === 'text' || variant === 'textBlock') {
      if (disabled) {
        return theme.palette.grey[400];
      }

      if (loading) {
        return 'transparent';
      }

      return theme.palette.text.primary;
    }

    return theme.palette.common.white;
  };
  const getHoverBackgroundColor = ({ disabled, loading, variant }) => {
    if (disabled || loading) {
      return null;
    }

    if (variant === 'text' || variant === 'textBlock') {
      return theme.palette.grey[100];
    }

    return theme.palette.primary.dark;
  };

  return {
    root: {
      position: 'relative',
      minHeight: getMinHeight,
      padding: getPadding,
      borderRadius: getBorderRadius,
      fontSize: getFontSize,
      backgroundColor: getBackgroundColor,
      color: getColor,
      '&:hover': {
        backgroundColor: getHoverBackgroundColor,
      },
    },
    content: {},
    loader: {
      position: 'absolute',
    },
  };
});

const getLoaderSize = (size) => {
  if (size === 'extraSmall') {
    return '10px';
  }

  return '14px';
};

const Button = (props) => {
  const {
    disabled, loading, variant, color, size, className, children, ...rootProps
  } = props;
  const classes = useStyles(props);
  const loaderSize = getLoaderSize(size);

  return (
    <ButtonBase
      disabled={disabled || loading}
      className={cn(classes.root, className)}
      {...rootProps}
    >
      <Content>{children}</Content>
      {loading && <CircularProgress className={classes.loader} size={loaderSize} />}
    </ButtonBase>
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
  size: PropTypes.oneOf(['extraSmall', 'small', 'medium', 'large']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
