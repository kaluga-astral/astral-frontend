import React from 'react';
import PropTypes from 'prop-types';
import ruLocale from 'date-fns/locale/ru';
import DateFnsUtils from '@date-io/date-fns';
import { LocalizationProvider } from '@mui/lab';

const DatePickersUtilsProvider = ({ children }) => (
  <LocalizationProvider utils={DateFnsUtils} locale={ruLocale}>
    {children}
  </LocalizationProvider>
);

DatePickersUtilsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DatePickersUtilsProvider;
