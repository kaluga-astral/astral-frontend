import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { DEFAULT_CLIENT_DATE_FORMAT } from '@astral-frontend/constants';
import { formatISO, isValid } from 'date-fns';

const DatePicker = ({
  autoOk = true,
  pickerVariant = 'inline',
  minDate = new Date('1000-01-01'),
  maxDate = new Date('9999-12-31'),
  viewFormat = DEFAULT_CLIENT_DATE_FORMAT,
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
    <KeyboardDatePicker
      {...props}
      autoOk={autoOk}
      minDate={minDate}
      maxDate={maxDate}
      variant={pickerVariant}
      format={viewFormat}
      value={value && new Date(value)}
      invalidDateMessage={invalidDateMessage}
      onChange={handleChange}
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
