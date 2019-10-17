import React from 'react';

import useStyles from './styles';

import emptyPlaceholderImg from './empty-placeholder-img.svg';

const ProductsListEmptyPlaceholder = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img src={emptyPlaceholderImg} className={classes.image} alt="Нет результатов" />
      <p className={classes.message}>
        Нет подключенных продуктов
      </p>
    </div>
  );
};

export default ProductsListEmptyPlaceholder;
