import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

export default withStyles(theme => ({
  root: {
    padding: '5px 12.5px',
    fontSize: '14px',
    color: theme.palette.common.black,
    '&:first-child': {
      paddingLeft: '25px',
    },
    '&:last-child': {
      paddingRight: '25px',
    },
  },
  head: {
    fontWeight: 500,
    whiteSpace: 'nowrap',
  },
  body: {
    fontWeight: 300,
  },
}))(TableCell);
