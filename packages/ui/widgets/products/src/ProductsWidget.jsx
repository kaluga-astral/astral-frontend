import React, { useState } from 'react';
import PropTypes from 'prop-types';

// polyfill for fetch
import 'unfetch/polyfill';

import OpenWidgetButton from './components/OpenWidgetButton';
import Popover from './components/ProductsPopover';

import useProductsFetch from './utils/useProductsFetch';

import { PRODUCTION_ENV_NAME, DEVELOPMENT_ENV_NAME } from './constants/env';
import { API_PATHS } from './constants/apiPaths';

const ProductsWidget = ({ environmentName, buttonProps }) => {
  const [getProducts, fetchProductsInfo] = useProductsFetch(API_PATHS[environmentName]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [firstBoot, setFirstBoot] = useState(true);

  const open = Boolean(anchorEl);
  const popoverId = open ? 'products-popover' : undefined;

  const onGetProducts = () => {
    const { status } = fetchProductsInfo;

    // если поповер открывается в первый раз, то загрузить данные
    // если продукты были загружены с ошибкой, попытаться загрузить их снова
    if (!open && (firstBoot || status.fail)) getProducts();

    if (firstBoot) setFirstBoot(false);
  };

  const closePopover = () => {
    setAnchorEl(null);
  };

  const openPopover = (event) => {
    onGetProducts();

    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <OpenWidgetButton
        {...buttonProps}
        id={popoverId}
        onClick={openPopover}
      />
      <Popover
        open={open}
        id={popoverId}
        anchorEl={anchorEl}
        fetchProductsInfo={fetchProductsInfo}
        onClose={closePopover}
      />
    </>
  );
};

ProductsWidget.defaultProps = {
  buttonProps: {},
};

// Виджет для отображения списка продуктов, доступных пользователю сервисов Астрала.
ProductsWidget.propTypes = {
  buttonProps: PropTypes.shape({
    className: PropTypes.string,
    color: PropTypes.oneOf(['primary', 'secondary']),
  }),
  environmentName: PropTypes.oneOf([DEVELOPMENT_ENV_NAME, PRODUCTION_ENV_NAME]).isRequired,
};

export default ProductsWidget;
