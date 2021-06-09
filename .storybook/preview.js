import { ThemeProvider } from '@astral/components';
import { AstralEDOTheme } from '@astral/themes';

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
