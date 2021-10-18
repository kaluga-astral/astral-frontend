import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker as MuiDatePicker } from '@mui/lab';
import { DEFAULT_VIEW_DATE_FORMAT } from '@astral-frontend/constants';
import { formatISO, isValid } from 'date-fns';

import TextField from '../TextField';

const DatePicker = ({
  autoOk = true,
  pickerVariant = 'inline',
  minDate = new Date('1000-01-01'),
  maxDate = new Date('9999-12-31'),
  viewFormat = DEFAULT_VIEW_DATE_FORMAT,
  invalidDateMessage = 'Неверный формат даты',
  onChange,
  value,
  ...props
}) => {
  const handleChange = date => {
    if (isValid(date)) {
      onChange(formatISO(date, { representation: 'date' }));

      return;
    }

    onChange('Invalid Date');
  };

  return (
    <MuiDatePicker
      {...props}
      autoOk={autoOk}
      minDate={minDate}
      maxDate={maxDate}
      variant={pickerVariant}
      inputFormat={viewFormat}
      value={value && new Date(value)}
      invalidDateMessage={invalidDateMessage}
      onChange={handleChange}
      renderInput={inputProps => <TextField {...inputProps} />}
    />
  );
};

DatePicker.propTypes = {
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  value: PropTypes.string,
  viewFormat: PropTypes.string,
  pickerVariant: PropTypes.string,
  invalidDateMessage: PropTypes.string,
  autoOk: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default DatePicker;
