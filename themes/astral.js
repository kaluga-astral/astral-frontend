import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    background: {
      default: '#ffffff',
    },
    primary: {
      light: '#33a2ef',
      main: '#008bec',
      dark: '#0065b1',
    },
  },
  overrides: {
    MuiSvgIcon: {
      root: { fontSize: 'inherit' },
    },
    MuiInput: {
      root: { fontSize: '1em' },
    },
  },
});

export default theme;
