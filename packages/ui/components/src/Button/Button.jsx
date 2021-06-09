import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';
import { Button as MuiButton } from '@astral-frontend/core';
import cn from 'classnames';

import CircularProgress from '../CircularProgress';

export const BUTTON_VARIANTS = {
  text: 'text',
  textBlock: 'textBlock',
  regular: 'regular',
  regularBlock: 'regularBlock',
  outlined: 'outlined',
  outlinedBlock: 'outlinedBlock',
};

export const BUTTON_SIZES = {
  extraSmall: 'extraSmall',
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const isBlockVariant = variant => variant.includes('Block');
const isRegularVariant = variant => variant.includes(BUTTON_VARIANTS.regular);
const isTextVariant = variant => variant.includes(BUTTON_VARIANTS.text);
const isOutlinedVariant = variant => variant.includes(BUTTON_VARIANTS.outlined);

const isExtraSmallSize = size => size === BUTTON_SIZES.extraSmall;
const isSmallSize = size => size === BUTTON_SIZES.small;
const isMediumSize = size => size === BUTTON_SIZES.medium;
const isLargeSize = size => size === BUTTON_SIZES.large;

const useStyles = makeStyles(
  theme => ({
    root: {
      position: 'relative',
      padding: '5px 20px',
      borderRadius: '4px',
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightBold,
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
      transition: 'background .25s ease-out',
      textTransform: 'none',
      overflow: 'hidden',

      '&:hover': {
        backgroundColor: theme.palette.grey[100],
      },
    },

    rootLoading: {
      color: 'transparent',

      '&:hover': {
        backgroundColor: 'inherit',
      },
    },

    rootBlock: {
      borderRadius: 0,
    },

    rootExtraSmall: {
      minHeight: '20px',
      padding: '3px 10px',
      fontSize: theme.typography.pxToRem(10),
    },

    rootSmall: {
      minHeight: '32px',
      fontSize: theme.typography.pxToRem(12),
    },

    rootMedium: {
      minHeight: '40px',
    },

    rootLarge: {
      minHeight: '64px',
    },

    rootRegular: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,

      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },

    rootRegularLoading: {
      color: 'transparent',
      backgroundColor: theme.palette.grey[100],
    },

    rootRegularDisabled: {
      backgroundColor: theme.palette.grey[300],
    },

    rootOutlined: {
      border: `1px solid ${theme.palette.gray[500]}`,
    },

    rootOutlinedDisabled: {
      borderColor: theme.palette.grey[300],
    },

    disabled: {
      color: theme.palette.grey[400],
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
      backgroundColor: theme.palette.grey[100],
    },

    loaderContainerText: {
      backgroundColor: 'transparent',
    },

    loader: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      margin: 'auto',
    },
  }),
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
    size,
    className,
    children,
    ...rootProps
  } = props;
  const classes = useStyles();
  const loaderSize = getLoaderSize(size);

  return (
    <MuiButton
      disabled={disabled || loading}
      className={className}
      classes={{
        root: cn(classes.root, {
          [classes.rootLoading]: loading,
          [classes.rootBlock]: isBlockVariant(variant),
          [classes.rootExtraSmall]: isExtraSmallSize(size),
          [classes.rootSmall]: isSmallSize(size),
          [classes.rootMedium]: isMediumSize(size),
          [classes.rootLarge]: isLargeSize(size),
          [classes.rootRegular]: isRegularVariant(variant),
          [classes.rootRegularLoading]: loading && isRegularVariant(variant),
          [classes.rootRegularDisabled]: disabled && isRegularVariant(variant),
          [classes.rootOutlined]: isOutlinedVariant(variant),
          [classes.rootOutlinedDisabled]:
            disabled && isOutlinedVariant(variant),
        }),
        disabled: classes.disabled,
      }}
      {...rootProps}
    >
      {children}
      {loading && (
        <div
          className={cn(classes.loaderContainer, {
            [classes.loaderContainerText]: isTextVariant(variant),
          })}
        >
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
  variant: 'text',
  size: 'medium',
};

Button.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  /**
   * Вариант использования
   */
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
  /**
   * Размер
   */
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
