import AstralTheme from './AstralTheme';

const astralEDOThemeOptions = {
  palette: {
    action: {
      hover: '#f3f0fd',
    },
    primary: {
      dark: '#4e30c7',
      main: '#6746eb',
    },
  },
};

class AstralEDOTheme extends AstralTheme {
  constructor() {
    super(astralEDOThemeOptions);
  }
}

export default AstralEDOTheme;
