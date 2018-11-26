import PropTypes from 'prop-types';
import { create } from 'jss';
import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
  jssPreset,
} from '@material-ui/core/styles';
import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider';
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from 'date-fns/locale/ru';

import BaseCSS from './BaseCSS';

const styleNode = document.createComment('insertion-point-jss');
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = 'insertion-point-jss';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    background: {
      default: '#ffffff',
    },
    primary: {
      light: '#33a2ef',
      main: '#008bec',
      dark: '#0065b1',
    },
  },
  overrides: {
    MuiSvgIcon: {
      root: { fontSize: 'inherit' },
    },
    MuiInput: {
      root: { fontSize: '1em' },
    },
  },
});

const ThemeProvider = ({ children }) => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BaseCSS />
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
        {children}
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  </JssProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
