/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import ProductsWidget from './index';

storiesOf('packages/widgets/ProductsWidget', module).add('default', () => (
  <ProductsWidget identityUrl="https://identity.astral-dev.net" />
));
