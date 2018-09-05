import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { number, boolean } from '@storybook/addon-knobs';

import Pagination from './Pagination';

storiesOf('Pagination', module).add('default', () => {
  const showCountPerPage = boolean('showCountPerPage', false);
  const offset = number('offset', 0);
  const count = number('count', 10);
  const totalCount = number('totalCount', 101);

  return (
    <Pagination
      showCountPerPage={showCountPerPage}
      offset={offset}
      count={count}
      totalCount={totalCount}
      onChange={action('params changed')}
    />
  );
});
