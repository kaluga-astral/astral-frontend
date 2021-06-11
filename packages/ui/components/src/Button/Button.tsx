import React from 'react';
import { makeStyles } from '@astral-frontend/styles';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@astral-frontend/core';
import cn from 'classnames';

import CircularProgress from '../CircularProgress';

export enum ButtonVariants {
  TEXT = 'text',
  TEXT_BLOCK = 'textBlock',
  REGULAR = 'regular',
  REGULAR_BLOCK = 'regularBlock',
  OUTLINED = 'outlined',
  OUTLINED_BLOCK = 'outlinedBlock',
}

export enum ButtonSizes {
  EXTRA_SMALL = 'extraSmall',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

const isBlockVariant = (variant: ButtonVariants): boolean =>
  variant.includes('Block');
const isRegularVariant = (variant: ButtonVariants): boolean =>
  variant.includes(ButtonVariants.REGULAR);
const isTextVariant = (variant: ButtonVariants): boolean =>
  variant.includes(ButtonVariants.TEXT);
const isOutlinedVariant = (variant: ButtonVariants): boolean =>
  variant.includes(ButtonVariants.OUTLINED);

const isExtraSmallSize = (size: ButtonSizes): boolean =>
  size === ButtonSizes.EXTRA_SMALL;
const isSmallSize = (size: ButtonSizes): boolean => size === ButtonSizes.SMALL;
const isMediumSize = (size: ButtonSizes): boolean =>
  size === ButtonSizes.MEDIUM;
const isLargeSize = (size: ButtonSizes): boolean => size === ButtonSizes.LARGE;

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
      border: `1px solid ${theme.palette.grey[500]}`,
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

const getLoaderSize = (size: ButtonSizes) => {
  if (size === 'extraSmall') {
    return '10px';
  }

  return '14px';
};

export type ButtonProps = Omit<MuiButtonProps, 'size' | 'variant'> & {
  loading?: boolean;
  variant?: ButtonVariants;
  size?: ButtonSizes;
};

const Button = (props: ButtonProps) => {
  const {
    disabled,
    loading,
    variant = ButtonVariants.TEXT,
    size = ButtonSizes.MEDIUM,
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

export default Button;
