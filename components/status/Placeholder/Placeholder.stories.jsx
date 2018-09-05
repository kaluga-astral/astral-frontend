import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import Loader from './Placeholder';

storiesOf('Loader', module).add('default', () => {
  const isFetching = boolean('isFetching', true);

  return <Loader isFetching={isFetching} />;
});
