import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';

import ProductLogo from './ProductLogo';

storiesOf('brand', module).add('ProductLogo', () => {
  const width = number('width', 200);
  const height = number('height', undefined);
  const productName = text('productName', 'Личный кабинет');

  return <ProductLogo productName={productName} width={width} height={height} />;
});
