import AstralTheme from './AstralTheme';

const astralEDOThemeOptions = {
  spacing: 4,
  palette: {
    action: {
      hover: '#f3f0fd',
    },
    primary: {
      dark: '#4e30c7',
      main: '#6746eb',
      light: 'rgba(103, 70, 235, 0.1)',
    },
  },
};

class AstralEDOTheme extends AstralTheme {
  constructor() {
    super(astralEDOThemeOptions);
  }
}

export default AstralEDOTheme;
