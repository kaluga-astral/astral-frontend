import React from 'react';
import PropTypes from 'prop-types';

import { useProductListItemStyles } from './styles';

const ProductListItem = ({
  productIconUrl, productColor, name, productUrl, shortDescription,
}) => {
  const classes = useProductListItemStyles({ productColor });

  return (
    <a className={classes.container} href={productUrl}>
      <img className={classes.icon} src={productIconUrl} alt={`Иконка ${name}`} />
      <div>
        <h3 className={classes.name}>{name}</h3>
        <p className={classes.description}>{shortDescription}</p>
      </div>
    </a>
  );
};

ProductListItem.propTypes = {
  productIconUrl: PropTypes.string.isRequired,
  productColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  productUrl: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
};

export default ProductListItem;
