import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

export default withStyles(theme => ({
  root: {
    fontSize: '14px',
    color: theme.palette.common.black,
  },
  head: {
    fontWeight: 500,
    whiteSpace: 'nowrap',
  },
  body: {
    fontWeight: 300,
  },
}))(TableCell);
