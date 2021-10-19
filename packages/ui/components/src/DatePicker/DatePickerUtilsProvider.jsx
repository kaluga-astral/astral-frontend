import React from 'react';
import PropTypes from 'prop-types';
import ruLocale from 'date-fns/locale/ru';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const DatePickersUtilsProvider = ({ children }) => (
  <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
    {children}
  </LocalizationProvider>
);

DatePickersUtilsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DatePickersUtilsProvider;
