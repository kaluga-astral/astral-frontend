import PropTypes from 'prop-types';
import React from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from '@astral-frontend/styles';
import { StylesProvider } from '@mui/styles';

import GlobalCSS from './GlobalCSS';
import FontsConnector from './FontsConnector';

const ThemeProvider = ({ children, theme, ...props }) => (
  <StyledEngineProvider injectFirst>
    <StylesProvider {...props}>
      <MuiThemeProvider theme={theme}>
        <GlobalCSS />
        <FontsConnector />
        {children}
      </MuiThemeProvider>
    </StylesProvider>
  </StyledEngineProvider>
);

ThemeProvider.defaultProps = {
  sheetsRegistry: null,
  generateClassName: null,
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  sheetsRegistry: PropTypes.shape({}),
  theme: PropTypes.shape({}).isRequired,
  generateClassName: PropTypes.func,
};

export default ThemeProvider;
