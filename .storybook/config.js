import React from 'react';
import { configure, getStorybook, setAddon, addDecorator } from '@storybook/react';
import { ThemeProvider } from '@astral-frontend/components';
import { AstralEDOTheme } from '@astral-frontend/themes';

const theme = new AstralEDOTheme();
const req = require.context('../packages', true, /\.stories\.jsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>);
configure(loadStories, module);
