import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';
import { Button as MuiButton } from '@astral-frontend/core';

import CircularProgress from '../CircularProgress';

const getIsTextVariant = variant =>
  variant === 'text' || variant === 'textBlock';
const getIsBlockVariant = variant =>
  variant === 'textBlock' ||
  variant === 'regularBlock' ||
  variant === 'outlinedBlock';
const getIsRegularVariant = variant =>
  variant === 'regular' || variant === 'regularBlock';
const getIsOutlinedVariant = variant =>
  variant === 'outlined' || variant === 'outlinedBlock';

const useStyles = makeStyles(
  theme => {
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
    const getBorder = ({ variant }) => {
      const isOutlinedVariant = getIsOutlinedVariant(variant);

      if (isOutlinedVariant) {
        return `1px solid ${theme.palette.gray[500]}`;
      }

      return 'none';
    };
    const getFontSize = ({ size }) => {
      if (size === 'extraSmall') {
        return theme.typography.pxToRem(10);
      }
      if (size === 'small') {
        return theme.typography.pxToRem(12);
      }

      return theme.typography.pxToRem(14);
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
        return theme.palette.grey[300];
      }

      return null;
    };
    const getDisabledColor = () => theme.palette.grey[400];
    const getDisabledBorderColor = ({ variant }) => {
      const isOutlinedVariant = getIsOutlinedVariant(variant);

      if (isOutlinedVariant) {
        return theme.palette.grey[300];
      }

      return null;
    };
    const getColor = ({ loading, variant }) => {
      const isTextVariant = getIsTextVariant(variant);
      const isRegularVariant = getIsRegularVariant(variant);
      const isOutlinedVariant = getIsOutlinedVariant(variant);

      if (isTextVariant || isOutlinedVariant) {
        if (loading) {
          return 'transparent';
        }

        return theme.palette.primary.main;
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
      const isOutlinedVariant = getIsOutlinedVariant(variant);

      if (loading) {
        return null;
      }

      if (isTextVariant || isOutlinedVariant) {
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
        border: getBorder,
        fontSize: getFontSize,
        fontWeight: theme.typography.fontWeightBold,
        backgroundColor: getBackgroundColor,
        color: getColor,
        transition: 'background .25s ease-out',
        '&:hover': {
          backgroundColor: getHoverBackgroundColor,
        },
        textTransform: 'none',
      },
      disabled: {
        backgroundColor: getDisabledBackgroundColor,
        color: getDisabledColor,
        borderColor: getDisabledBorderColor,
      },
      loaderContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: getBackgroundColor,
      },
      loader: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        margin: 'auto',
      },
    };
  },
  { name: 'Button' },
);

const getLoaderSize = size => {
  if (size === 'extraSmall') {
    return '10px';
  }

  return '14px';
};

const Button = props => {
  const {
    disabled,
    loading,
    variant,
    color,
    size,
    className,
    children,
    ...rootProps
  } = props;
  const classes = useStyles(props);
  const loaderSize = getLoaderSize(size);

  return (
    <MuiButton
      disabled={disabled || loading}
      className={className}
      classes={{
        root: classes.root,
        disabled: classes.disabled,
      }}
      {...rootProps}
    >
      {children}
      {loading && (
        <div className={classes.loaderContainer}>
          <CircularProgress className={classes.loader} size={loaderSize} />
        </div>
      )}
    </MuiButton>
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
  variant: PropTypes.oneOf([
    'text',
    'textBlock',
    'regular',
    'regularBlock',
    'outlined',
  ]),
  /**
   * Размер
   */
  size: PropTypes.oneOf(['extraSmall', 'small', 'medium', 'large']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
