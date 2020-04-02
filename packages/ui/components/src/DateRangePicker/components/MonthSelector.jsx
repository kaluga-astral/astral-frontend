import PropTypes from 'prop-types';
import React from 'react';
import { getMonth } from 'date-fns';
import { MenuItem, Select } from '@astral-frontend/core';

const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const MonthSelector = ({ date, onChange, translation }) => {
  return (
    <Select
      value={getMonth(date)}
      onChange={onChange}
      MenuProps={{ disablePortal: true }}
    >
      {(translation?.months ?? MONTHS).map((month, index) => (
        <MenuItem key={month} value={index}>
          {month}
        </MenuItem>
      ))}
    </Select>
  );
};

MonthSelector.defaultProps = {
  translation: null,
};

MonthSelector.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
  translation: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    months: PropTypes.arrayOf(
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
    ).isRequired,
    weekDays: PropTypes.arrayOf(
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
    ).isRequired,
    locale: PropTypes.shape({}),
  }),
};

export default MonthSelector;
