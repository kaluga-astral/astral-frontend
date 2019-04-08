import PropTypes from 'prop-types';
import React from 'react';
import { JssProvider } from 'react-jss';
import { MuiThemeProvider } from '@astral-frontend/core';

import GlobalCSS from './GlobalCSS';

const ThemeProvider = ({
  children, sheetsRegistry, theme, sheetsManager, generateClassName,
}) => (
  <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
      <GlobalCSS />
      {children}
    </MuiThemeProvider>
  </JssProvider>
);

ThemeProvider.defaultProps = {
  sheetsRegistry: null,
  sheetsManager: null,
  generateClassName: null,
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  sheetsRegistry: PropTypes.shape({}),
  theme: PropTypes.shape({}).isRequired,
  sheetsManager: PropTypes.shape({}),
  generateClassName: PropTypes.func,
};

export default ThemeProvider;
