import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

export default withStyles(
  theme => ({
    root: {
      padding: '5px 15px',
      fontSize: '14px',
      color: theme.palette.common.black,
      '&:first-child': {
        paddingLeft: '30px',
      },
      '&:last-child': {
        paddingRight: '30px',
      },
    },
    head: {
      fontWeight: 500,
      whiteSpace: 'nowrap',
    },
    body: {
      fontWeight: 300,
    },
  }),
  { name: 'TableCell' },
)(TableCell);
