import React from 'react';

import { useEmptyPlaceholderStyles } from '../ProductsList/styles';

const ProductsListEmptyPlaceholder = () => {
  const classes = useEmptyPlaceholderStyles();

  return (
    <p className={classes.container}>
      Нет доступных продуктов
    </p>
  );
};

export default ProductsListEmptyPlaceholder;
