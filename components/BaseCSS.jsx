import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/core';

const localFallbackFonts = [
  'Helvetica',
  'Arial',
  'serif',
  'sans-serif',
  'cursive',
  'fantasy',
  'monospace',
];

const styles = theme => ({
  '@global': {
    html: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      boxSizing: 'border-box',
    },
    'html, body, #root': {
      width: '100%',
      height: '100%',
      margin: 0,
      padding: 0,
    },
    '*, *::before, *::after': {
      boxSizing: 'inherit',
    },
    body: {
      backgroundColor: theme.palette.background.default,
      fontFamily: theme.typography.fontFamily,
      '@media print': {
        backgroundColor: theme.palette.common.white,
      },
    },
  },
});

class BaseCSS extends PureComponent {
  componentDidMount = () => {
    const {
      theme: {
        typography: { fontFamily },
      },
    } = this.props;

    fontFamily
      .split(', ')
      .map(fontName => fontName.replace(/"/g, ''))
      .filter(font => !localFallbackFonts.includes(font))
      .forEach(font => import(/* webpackPreload: true */ `astralnalog/fonts/${font}/style.css`));
  };

  render = () => null;
}

BaseCSS.propTypes = {
  theme: PropTypes.shape({
    typography: PropTypes.shape({
      fontFamily: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withStyles(styles)(withTheme()(BaseCSS));
