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
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';

const styleNode = document.createComment('insertion-point-jss');
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = 'insertion-point-jss';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33a2ef',
      main: '#008bec',
      dark: '#0065b1',
    },
  },
});

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
