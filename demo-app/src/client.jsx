import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createGenerateClassName } from '@astral-frontend/styles';
import { AstralEDOTheme } from '@astral-frontend/themes';

import App from './App';

const theme = new AstralEDOTheme();
const generateClassName = createGenerateClassName();

hydrate(
  <ThemeProvider theme={theme} generateClassName={generateClassName}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
  () => {
    const ssrStyles = document.getElementById('jss-server-side');

    ssrStyles.parentNode.removeChild(ssrStyles);
  },
);
