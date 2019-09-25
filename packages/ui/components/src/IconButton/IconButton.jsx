import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

import { IconButton as MuiIconButton } from '@astral-frontend/core';
import CircularProgress from '../CircularProgress';

const SMALL_CIRCULAR_SIZE = 14;
const MEDIUM_CIRCULAR_SIZE = 16;
const getSizeOfCircularProgress = size => (size === 'small' ? SMALL_CIRCULAR_SIZE : MEDIUM_CIRCULAR_SIZE);

const useStyles = makeStyles({
  root: {
    padding: '5px',
  },
  small: {
    height: '24px',
    width: '24px',
  },
  medium: {
    height: '32px',
    width: '32px',
  },
  loading: {
    color: 'transparent',
    fontSize: 0,
  },
});

const IconButton = ({
  loading,
  disabled,
  className: classNameProp,
  color,
  size,
  children,
  ...props
}) => {
  const classes = useStyles(props);
  const className = cn(
    classes.root,
    {
      [classes.loading]: loading,
      [classes.small]: size === 'small',
      [classes.medium]: size === 'medium',
    },
    classNameProp,
  );

  return (
    <MuiIconButton disabled={disabled || loading} className={className} {...props}>
      {loading ? (
        <CircularProgress className={classes.loader} size={getSizeOfCircularProgress(size)} />
      ) : (
        children
      )}
    </MuiIconButton>
  );
};

IconButton.defaultProps = {
  className: null,
  disabled: false,
  loading: false,
  color: 'primary',
  size: 'medium',
};

IconButton.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
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
