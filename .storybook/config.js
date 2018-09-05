import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import ThemeProvider from '../components/ThemeProvider';

addDecorator(checkA11y);

addDecorator(withKnobs);

// addDecorator(withInfo);

addDecorator(story => (
  <ThemeProvider>
    <div style={{ margin: '10px', height: '100%' }}>{story()}</div>
  </ThemeProvider>
));

const req = require.context('../components', true, /.stories.jsx?$/);
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
