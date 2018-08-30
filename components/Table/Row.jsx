import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';

export default withStyles({
  root: {
    borderLeft: '3px solid transparent',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    '&$selected': {
      borderBottom: 0,
      borderLeft: '3px solid #0A90ED', // FIXME: в переменные
      background: 'rgba(10, 144, 237, 0.02)',
    },
    '&$hover:hover': {
      background: 'rgba(10, 144, 237, 0.02)',
    },
  },
  selected: {},
  hover: {
    cursor: 'pointer',
  },
  head: {
    borderBottom: '2px solid #DFDFDF;', // FIXME: в переменные
  },
})(TableRow);
