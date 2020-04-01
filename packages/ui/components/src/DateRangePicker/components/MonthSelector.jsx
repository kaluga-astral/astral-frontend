import React from 'react';
import { getMonth } from 'date-fns';
import { MenuItem, Select } from '@astral-frontend/core';

const MonthSelector = ({ date, onChange, months }) => {
  return (
    <Select
      value={getMonth(date)}
      onChange={onChange}
      MenuProps={{ disablePortal: true }}
    >
      {months.map((month, idx) => (
        <MenuItem key={month} value={idx}>
          {month}
        </MenuItem>
      ))}
    </Select>
  );
};

export default MonthSelector;
