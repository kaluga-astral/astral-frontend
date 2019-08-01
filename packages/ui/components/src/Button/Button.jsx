import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

import ButtonBase from '../ButtonBase';
import CircularProgress from '../CircularProgress';

import Content from './Content';

const getIsTextVariant = variant => variant === 'text' || variant === 'textBlock';
const getIsBlockVariant = variant => variant === 'textBlock' || variant === 'regularBlock';
const getIsRegularVariant = variant => variant === 'regular' || variant === 'regularBlock';

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
        return '64px';
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
    const isBlockVariant = getIsBlockVariant(variant);

    if (isBlockVariant) {
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
  const getBackgroundColor = ({ loading, variant }) => {
    const isTextVariant = getIsTextVariant(variant);
    const isRegularVariant = getIsRegularVariant(variant);

    if (isTextVariant) {
      return null;
    }

    if (loading) {
      return theme.palette.grey[100];
    }

    if (isRegularVariant) {
      return theme.palette.primary.main;
    }

    return null;
  };
  const getDisabledBackgroundColor = ({ variant }) => {
    const isTextVariant = getIsTextVariant(variant);
    const isRegularVariant = getIsRegularVariant(variant);

    if (isTextVariant) {
      return null;
    }

    if (isRegularVariant) {
      return theme.palette.grey[100];
    }

    return null;
  };
  const getColor = ({ loading, variant }) => {
    const isTextVariant = getIsTextVariant(variant);
    const isRegularVariant = getIsRegularVariant(variant);

    if (isTextVariant) {
      if (loading) {
        return 'transparent';
      }

      return theme.palette.text.primary;
    }

    if (isRegularVariant) {
      if (loading) {
        return theme.palette.grey[100];
      }

      return theme.palette.common.white;
    }

    return theme.palette.common.white;
  };
  const getHoverBackgroundColor = ({ loading, variant }) => {
    const isTextVariant = getIsTextVariant(variant);

    if (loading) {
      return null;
    }

    if (isTextVariant) {
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
      '&:disabled': {
        backgroundColor: getDisabledBackgroundColor,
        color: theme.palette.grey[400],
      },
    },
    loader: {
      position: 'absolute',
      // именно этот способ центрирования работает в IE (и соответсвенно в остальных браузерах)
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      margin: 'auto',
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
      <Content loading={loading}>{children}</Content>
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
