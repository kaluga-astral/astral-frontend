import { merge } from 'lodash-es';
import Theme from './Theme';

const astralThemeOptions = {
  typography: {
    fontFamily: '"Roboto", system-ui, sans-serif',
  },
  palette: {
    background: {
      default: '#eaeaea',
    },
  },
  overrides: {
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
  },
};

class AstralTheme extends Theme {
  constructor(options) {
    super(merge({}, astralThemeOptions, options));
  }
}

export default AstralTheme;
