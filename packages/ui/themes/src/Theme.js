import { merge } from 'lodash-es';
import { createTheme } from '@astral-frontend/styles';

const themeOptions = {
  typography: {
    useNextVariants: true,
  },
};

class Theme {
  constructor(options) {
    return createTheme(merge({}, themeOptions, options));
  }
}

export default Theme;
