import React from 'react';
import { Checkbox } from '@astral-frontend/components';

const DataListItemDefaultSelector = props => (
  <Checkbox
    onClick={e => {
      e.stopPropagation();
    }}
    {...props}
  />
);

export default DataListItemDefaultSelector;
