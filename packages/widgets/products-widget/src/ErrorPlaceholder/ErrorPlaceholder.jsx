import React from 'react';
import PropTypes from 'prop-types';

import { ErrorIcon } from '@astral-frontend/icons';

import useStyles from './styles';

import errorPlaceholderImg from './error-placeholder-img.svg';

const ProductsErrorPlaceholder = ({ error }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img className={classes.image} src={errorPlaceholderImg} alt="Ошибка" />
      <div className={classes.messageContainer}>
        <ErrorIcon className={classes.errorIcon} />
        <p className={classes.message}>{error.message}</p>
      </div>
    </div>
  );
};

ProductsErrorPlaceholder.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
};

export default ProductsErrorPlaceholder;
