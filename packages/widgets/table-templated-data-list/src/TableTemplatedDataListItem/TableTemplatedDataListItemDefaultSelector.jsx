import React from 'react';
import { Checkbox } from '@astral-frontend/components';

const TableTemplatedDataListItemDefaultSelector = props => (
  <Checkbox
    onClick={e => {
      e.preventDefault();
      e.stopPropagation();
    }}
    {...props}
  />
);

export default TableTemplatedDataListItemDefaultSelector;
