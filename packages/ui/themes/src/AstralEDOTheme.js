import AstralTheme from './AstralTheme';

const astralEDOThemeOptions = {
  palette: {
    action: {
      hover: '#f3f0fd',
    },
    primary: {
      dark: '#4e30c7',
      main: '#6746eb',
      light: '#ebe8f8',
    },
    error: {
      notification: '#fe5555',
    },
  },
  props: {
    MuiTextField: {
      variant: 'standard',
    },
  },
  overrides: {
    MuiFormControl: {
      root: {
        marginBottom: 0,
        paddingBottom: 0,
      },
    },
    MuiFormHelperText: null,
    MuiInputLabel: null,
    MuiInputBase: null,
    MuiOutlinedInput: null,
  },
};

class AstralEDOTheme extends AstralTheme {
  constructor() {
    super(astralEDOThemeOptions);
  }
}

export default AstralEDOTheme;
