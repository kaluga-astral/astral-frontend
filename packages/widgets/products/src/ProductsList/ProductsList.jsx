import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';

import ProductListItem from '../ProductListItem';

const ProductsList = ({ products }) => {
  const classes = useStyles();

  return (
    <ul className={classes.container}>
      {products.map((product, index) => (
        <li key={product.name} className={classes.listItem}>
          {index === 0 && <span className={classes.decorArrow} />}
          <ProductListItem {...product} />
        </li>
      ))}
    </ul>
  );
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      iconFileId: PropTypes.string.isRequired,
      backgroundHexColor: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      productUrl: PropTypes.string.isRequired,
      shortDescription: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProductsList;
