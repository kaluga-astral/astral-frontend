/* eslint-disable */
import React from 'react';
import { ThemeProvider } from '../packages/ui/components';
import { AstralEDOTheme } from '../packages/ui/themes';

const theme = new AstralEDOTheme();

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Wrapper;
