import PropTypes from 'prop-types';
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

YearSelector.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default YearSelector;
