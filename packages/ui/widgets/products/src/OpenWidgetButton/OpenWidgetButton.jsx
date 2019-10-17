import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { IconButton } from '@astral-frontend/components';

import ProductsIcon from './ProductsIcon';

import useStyles from './styles';

const OpenWidgetButton = ({
  id, className, color, size, onClick, ...props
}) => {
  const classes = useStyles();

  return (
    <IconButton
      {...props}
      aria-describedby={id}
      color={color}
      size={size}
      className={cn(classes.button, className)}
      onClick={onClick}
    >
      <ProductsIcon className={classes.icon} />
    </IconButton>
  );
};

OpenWidgetButton.defaultProps = {
  color: 'primary',
  size: 'medium',
  id: null,
  className: null,
};

OpenWidgetButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default OpenWidgetButton;
