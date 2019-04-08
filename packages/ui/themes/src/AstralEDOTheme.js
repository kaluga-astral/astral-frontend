import AstralTheme from './AstralTheme';

const astralEDOThemeOptions = {
  palette: {
    primary: {
      dark: '#4e30c7',
      main: '#6746eb',
    },
    gray: {
      100: 'rgba(29, 63, 102, 0.09)',
      500: 'rgba(29, 63, 102, 0.45)',
      600: 'rgba(29, 63, 102, 0.62)',
    },
  },
};

class AstralEDOTheme extends AstralTheme {
  constructor() {
    super(astralEDOThemeOptions);
  }
}

export default AstralEDOTheme;