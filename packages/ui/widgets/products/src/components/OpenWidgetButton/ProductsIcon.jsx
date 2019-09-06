import React from 'react';
import { SvgIcon } from '@astral-frontend/core';

const ProductsIcon = props => (
  <SvgIcon width="15" height="15" viewBox="0 0 15 15" {...props}>
    <rect width="3" height="3" />
    <rect y="6" width="3" height="3" />
    <rect y="12" width="3" height="3" />
    <rect x="6" width="3" height="3" />
    <rect x="6" y="6" width="3" height="3" />
    <rect x="6" y="12" width="3" height="3" />
    <rect x="12" width="3" height="3" />
    <rect x="12" y="6" width="3" height="3" />
    <rect x="12" y="12" width="3" height="3" />
  </SvgIcon>
);

export default ProductsIcon;
