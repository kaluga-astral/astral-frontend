import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ApiUrlContext } from '../../contexts';

import { useProductListItemStyles } from './styles';

const ProductListItem = ({
  iconFileId, backgroundHexColor, name, productUrl, shortDescription,
}) => {
  const { apiUrl } = useContext(ApiUrlContext);
  const classes = useProductListItemStyles({ backgroundHexColor });

  return (
    <a className={classes.container} href={productUrl}>
      <img
        className={classes.icon}
        src={`${apiUrl}/files/${iconFileId}`}
        alt={`Иконка продукта ${name}`}
      />
      <div>
        <h3 className={classes.name}>{name}</h3>
        <p className={classes.description}>{shortDescription}</p>
      </div>
    </a>
  );
};

ProductListItem.propTypes = {
  iconFileId: PropTypes.string.isRequired,
  backgroundHexColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  productUrl: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
};

export default ProductListItem;
