import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

import { IconButton as MuiIconButton } from '@astral-frontend/core';
import SvgIcon from '../SvgIcon';
import CircularProgress from '../CircularProgress';

const useStyles = makeStyles(theme => {
  const getDimension = ({ size }) => {
    if (size === 'small') {
      return '24px';
    }
    if (size === 'medium') {
      return '32px';
    }

    throw new Error('Unknow value of prop `size`');
  };
  const getBackgroundColor = ({ success }) => {
    if (success) {
      return `${theme.palette.primary.main} !important`;
    }

    return null;
  };

  return {
    root: {
      padding: '5px',
      height: getDimension,
      width: getDimension,
      backgroundColor: getBackgroundColor,
    },
    successIcon: {
      width: '100%',
      height: '100%',
      fill: 'white',
    },
  };
});

const IconButton = React.forwardRef((props, ref) => {
  const {
    loading,
    success,
    disabled,
    className,
    children,
    size,
    ...other
  } = props;

  const classes = useStyles({ ...other, success, size });
  const renderChildren = () => {
    if (loading) {
      return <CircularProgress className={classes.loader} size="100%" />;
    }

    if (success) {
      return (
        <SvgIcon className={classes.successIcon}>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
        </SvgIcon>
      );
    }

    return children;
  };

  return (
    <MuiIconButton
      ref={ref}
      disabled={disabled || loading || success}
      className={cn(classes.root, className)}
      {...other}
    >
      {renderChildren()}
    </MuiIconButton>
  );
});

IconButton.defaultProps = {
  className: null,
  disabled: false,
  loading: false,
  success: false,
  color: 'primary',
  size: 'medium',
};

IconButton.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  success: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  /**
   * Цвет
   */
  color: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Размер
   */
  size: PropTypes.oneOf(['small', 'medium']),
};

export default IconButton;
