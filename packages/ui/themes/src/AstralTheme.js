import { merge } from 'lodash-es';
import Theme from './Theme';

const astralThemeOptions = {
  typography: {
    fontFamily: '"Manrope", sans-serif, system-ui',
  },
  palette: {
    background: {
      default: '#eaeaea',
    },
    gray: {
      100: 'rgba(29, 63, 102, 0.09)',
      300: 'rgba(29, 63, 102, 0.24)',
      500: 'rgba(29, 63, 102, 0.45)',
      600: 'rgba(29, 63, 102, 0.62)',
    },
    error: {
      light: '#FF8A5B',
      main: '#F93028',
      dark: '#C00000',
    },
    text: {
      primary: '#1d3f66',
    },
  },
  overrides: {
    MuiStepper: {
      root: {
        padding: '15px 0',
      },
    },
    MuiList: {
      padding: {
        paddingTop: '15px',
        paddingBottom: '15px',
      },
    },
    MuiPaper: {
      root: {
        boxShadow: 'none',
      },
    },
    MuiTableCell: {
      root: {
        paddingTop: '10px',
        paddingBottom: '10px',
      },
    },
  },
};

class AstralTheme extends Theme {
  constructor(options) {
    super(merge({}, astralThemeOptions, options));
  }
}

export default AstralTheme;
