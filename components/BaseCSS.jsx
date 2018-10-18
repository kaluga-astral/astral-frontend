import { withStyles } from '@material-ui/core/styles';
// import '../fonts/Roboto/style.css';

export default withStyles(
  {
    '@global': {
      'html, body, #root': {
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
      },
      body: {
        fontFamily: '"Roboto", sans-serif',
      },
    },
  },
  { name: 'BaseCss' },
)(() => null);
