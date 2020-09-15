import AstralTheme from './AstralTheme';

const astralEDOThemeOptions = {
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'div, table, nav, aside, ul, span, li': {
          '&::-webkit-scrollbar': {
            width: '5px',
            height: '5px',
            background: 'transparent',
          },
          '&::-webkit-scrollbar-track': {
            borderRadius: '3px',
            background: 'rgba(0, 0, 0, 0.1)',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#aaa',
            borderRadius: '2px',
          },
        },
      },
    },
  },
  palette: {
    action: {
      hover: '#f3f0fd',
    },
    primary: {
      dark: '#4e30c7',
      main: '#6746eb',
      light: '#ebe8f8',
    },
  },
};

class AstralEDOTheme extends AstralTheme {
  constructor() {
    super(astralEDOThemeOptions);
  }
}

export default AstralEDOTheme;
