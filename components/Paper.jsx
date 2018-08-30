import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

export default withStyles(theme => ({
  root: {
    padding: '20px',
    borderRadius: '6px',
    background: theme.palette.common.white,
    boxShadow: 'none',
  },
}))(Paper);
