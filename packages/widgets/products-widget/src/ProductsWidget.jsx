import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

// polyfill for fetch
import 'unfetch/polyfill';

import OpenWidgetButton from './OpenWidgetButton';
import Popover from './ProductsPopover';

import ApiUrlContext from './ApiUrlContext';

import { useProductsFetch } from './hooks';

const ProductsWidget = ({ identityUrl, buttonProps }) => {
  const { current: identityApiUrl } = useRef(`${identityUrl}/api`);
  const [getProducts, fetchProductsInfo] = useProductsFetch(identityApiUrl);
  const [anchorEl, setAnchorEl] = useState(null);
  const [firstBoot, setFirstBoot] = useState(true);

  const open = Boolean(anchorEl);
  const popoverId = open ? 'products-popover' : undefined;

  const handleGetProducts = () => {
    const { status } = fetchProductsInfo;

    // если поповер открывается в первый раз, то загрузить данные
    // если продукты были загружены с ошибкой, попытаться загрузить их снова
    if (!open && (firstBoot || status.fail)) getProducts();

    if (firstBoot) setFirstBoot(false);
  };

  const closePopover = () => {
    setAnchorEl(null);
  };

  const openPopover = event => {
    handleGetProducts();

    setAnchorEl(event.currentTarget);
  };

  return (
    <ApiUrlContext.Provider value={{ apiUrl: identityApiUrl }}>
      <OpenWidgetButton {...buttonProps} id={popoverId} onClick={openPopover} />
      <Popover
        open={open}
        id={popoverId}
        anchorEl={anchorEl}
        fetchProductsInfo={fetchProductsInfo}
        onClose={closePopover}
      />
    </ApiUrlContext.Provider>
  );
};

ProductsWidget.defaultProps = {
  buttonProps: {},
};

ProductsWidget.propTypes = {
  identityUrl: PropTypes.string.isRequired,
  buttonProps: PropTypes.shape({
    className: PropTypes.string,
  }),
};

export default ProductsWidget;
