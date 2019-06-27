import { withStyles } from '@astral-frontend/styles';

const GlobalCSS = () => null;

export default withStyles(
  theme => ({
    '@global': {
      html: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        boxSizing: 'border-box',
      },
      'html, body, #root': {
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
      },
      // body: {
      //   backgroundColor: theme.palette.background.default,
      //   ...theme.typography.body2,
      //   '@media print': {
      //     backgroundColor: theme.palette.common.white,
      //   },
      // },
      '*, *::before, *::after': {
        boxSizing: 'inherit',
      },
    },
  }),
  { name: 'GlobalCSS' },
)(GlobalCSS);
