import { ThemeProvider } from '@astral-frontend/components';

import { themes, getTheme } from './themes';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story, context) => {
    return (
      <ThemeProvider theme={getTheme(context.globals.theme).theme}>
        <Story {...context} />
      </ThemeProvider>
    );
  },
];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: themes[0].name,
    toolbar: {
      icon: 'circlehollow',
      items: themes.map(theme => theme.name),
      showName: true,
    },
  },
};
