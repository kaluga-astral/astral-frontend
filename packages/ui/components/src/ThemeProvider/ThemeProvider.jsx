import PropTypes from 'prop-types';
import React from 'react';
import { JssProvider } from 'react-jss';
import { MuiThemeProvider } from '@astral-frontend/core';

import GlobalCSS from './GlobalCSS';
import FontsConnector from './FontsConnector';

const ThemeProvider = ({
  children, sheetsRegistry, theme, generateClassName,
}) => (
  <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <GlobalCSS />
      <FontsConnector />
      {children}
    </MuiThemeProvider>
  </JssProvider>
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
