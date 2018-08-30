import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

export default withStyles(theme => ({
  root: {
    borderBottom: 0,
    color: theme.palette.common.black,
  },
  head: {
    fontSize: '14px',
    fontWeight: 'bold',
  },
  body: {
    fontSize: '14px',
    fontWeight: 300,
  },
}))(TableCell);
