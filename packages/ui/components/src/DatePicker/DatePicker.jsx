import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker as MuiDatePicker } from '@mui/lab';
import { DEFAULT_VIEW_DATE_FORMAT } from '@astral-frontend/constants';
import { formatISO, isMatch, isValid } from 'date-fns';

import TextField from '../TextField';

import DatePickersUtilsProvider from './DatePickerUtilsProvider';

const DatePicker = ({
  minDate = new Date('1000-01-01'),
  maxDate = new Date('9999-12-31'),
  viewFormat = DEFAULT_VIEW_DATE_FORMAT,
  mask = '__.__.____',
  invalidDateMessage = 'Неверный формат даты',
  onChange,
  value,
  renderInput = inputProps => (
    <TextField
      {...inputProps}
      {...(inputProps.error && { helperText: invalidDateMessage })}
    />
  ),
  ...props
}) => {
  const handleChange = date => {
    if (isValid(date) && isMatch(value, viewFormat)) {
      onChange(formatISO(date, { representation: 'date' }));

      return;
    }

    onChange('Invalid Date');
  };

  return (
    <DatePickersUtilsProvider>
      <MuiDatePicker
        {...props}
        minDate={minDate}
        maxDate={maxDate}
        inputFormat={viewFormat}
        mask={mask}
        value={value && new Date(value)}
        onChange={handleChange}
        renderInput={renderInput}
      />
    </DatePickersUtilsProvider>
  );
};

DatePicker.propTypes = {
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  value: PropTypes.string,
  viewFormat: PropTypes.string,
  mask: PropTypes.string,
  invalidDateMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  renderInput: PropTypes.func,
};

export default DatePicker;
