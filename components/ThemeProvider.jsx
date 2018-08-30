import PropTypes from 'prop-types';
import React from 'react';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
  jssPreset,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';

const theme = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      root: {
        fontSize: '20px',
      },
    },
    MuiMuiListItemIcon: {
      root: {
        marginRight: '25px',
      },
    },
    MuiListItemText: {
      root: {
        padding: 0,
        fontSize: '14px',
      },
    },
  },
  palette: {
    primary: {
      light: '#005ea0',
      main: '#0a90ed',
    },
  },
});
const generateClassName = createGenerateClassName();
const jss = create(jssPreset());

jss.options.insertionPoint = 'jss-insertion-point';

const ThemeProvider = ({ children }) => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <MuiPickersUtilsProvider utils={MomentUtils}>{children}</MuiPickersUtilsProvider>
    </MuiThemeProvider>
  </JssProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
