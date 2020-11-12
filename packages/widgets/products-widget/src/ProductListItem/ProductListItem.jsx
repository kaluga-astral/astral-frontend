import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ApiUrlContext from '../ApiUrlContext';

import useStyles from './styles';

import { getFileServiceUrl } from '../utils';

const ProductListItem = ({
  iconFileId,
  backgroundHexColor,
  name,
  productUrl,
}) => {
  const { apiUrl } = useContext(ApiUrlContext);
  const classes = useStyles({ backgroundHexColor });

  return (
    <a className={classes.container} href={productUrl}>
      <img
        className={classes.icon}
        src={`${getFileServiceUrl(apiUrl)}/${iconFileId}`}
        alt={`Иконка продукта ${name}`}
      />
      <h3 className={classes.name}>{name}</h3>
    </a>
  );
};

ProductListItem.propTypes = {
  iconFileId: PropTypes.string.isRequired,
  backgroundHexColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  productUrl: PropTypes.string.isRequired,
};

export default ProductListItem;
