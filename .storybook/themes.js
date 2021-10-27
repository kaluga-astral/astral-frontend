import { AstralEDOTheme } from '@astral-frontend/themes';

const edoTheme = new AstralEDOTheme();

export const themes = [
  {
    name: 'edo-theme',
    theme: edoTheme,
  },
  {
    name: 'astral-theme',
    theme: {
      ...edoTheme,
      palette: {
        ...edoTheme.palette,
        primary: {
          main: 'orange',
          dark: 'red',
          light: 'yellow',
        },
      },
    },
  },
];

export const getTheme = name => {
  return themes.find(theme => theme.name === name);
};
