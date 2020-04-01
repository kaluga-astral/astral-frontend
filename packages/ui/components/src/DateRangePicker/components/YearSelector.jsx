import React from 'react';
import { getYear } from 'date-fns';
import { MenuItem, Select } from '@astral-frontend/core';
import { generateYears } from '../utils';

const YearSelector = ({ date, onChange }) => {
  return (
    <Select
      value={getYear(date)}
      onChange={onChange}
      MenuProps={{ disablePortal: true }}
    >
      {generateYears(date, 10).map(year => (
        <MenuItem key={year} value={year}>
          {year}
        </MenuItem>
      ))}
    </Select>
  );
};

export default YearSelector;
