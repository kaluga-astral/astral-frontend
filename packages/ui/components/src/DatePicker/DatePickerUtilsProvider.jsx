import React from 'react';
import PropTypes from 'prop-types';
import ruLocale from 'date-fns/locale/ru';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@mui/lab';

const DatePickersUtilsProvider = ({ children }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
    {children}
  </MuiPickersUtilsProvider>
);

DatePickersUtilsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DatePickersUtilsProvider;
