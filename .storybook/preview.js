import { ThemeProvider } from '@astral-frontend/components';
import { AstralEDOTheme } from '@astral-frontend/themes';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const theme = new AstralEDOTheme();

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
