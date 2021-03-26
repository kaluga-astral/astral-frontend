import { withStyles } from '@astral-frontend/styles';

const GlobalCSS = () => null;

export default withStyles(
  theme => ({
    '@global': {
      html: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        boxSizing: 'border-box',
        fontSize: theme.typography.htmlFontSize,
      },
      'html, body, #root': {
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
      },
      body: {
        backgroundColor: theme.palette.background.default,
        ...theme.typography.body2,
        '@media print': {
          backgroundColor: theme.palette.common.white,
        },
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit',
      },
      // '::-webkit-scrollbar': {
      //   backgroundColor: '#fff',
      //   width: '16px',
      // },
      // '::-webkit-scrollbar-track': {
      //   backgroundColor: '#fff',
      // },
      // '::-webkit-scrollbar-thumb': {
      //   backgroundColor: '#babac0',
      //   borderRadius: '16px',
      //   border: '4px solid #fff',
      // },
      // '::-webkit-scrollbar-button ': {
      //   display: 'none',
      // },
    },
  }),
  { name: 'GlobalCSS' },
)(GlobalCSS);
