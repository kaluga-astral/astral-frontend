import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

Button.defaultProps = {
  variant: 'contained',
  color: 'primary',
};

export default withStyles(theme => ({
  root: {
    height: '40px',
    minWidth: '165px',
    borderRadius: '25px',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    fontWeight: 300,
    whiteSpace: 'nowrap',
  },
  disabled: {
    border: 0,
  },
  containedPrimary: {
    background: '#0a90ed', // FIXME: цвета в тему
    color: theme.palette.common.white,
    '&:hover': {
      background: '#0a90ed', // FIXME: цвета в тему
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)',
    },
    '&$disabled': {
      border: 0,
    },
  },
  containedSecondary: {
    border: '1px solid #0a90ed', // FIXME: цвета в тему
    background: theme.palette.common.white,
    color: '#0a90ed', // FIXME: цвета в тему
    '&:hover': {
      background: '#0a90ed', // FIXME: цвета в тему
      color: theme.palette.common.white,
    },
    '&$disabled': {
      border: 0,
    },
  },
}))(Button);
