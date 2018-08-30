import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

export default withStyles({
  badge: {
    backgroundColor: '#C00000',
    cursor: 'default',
    top: '10px',
    right: '-15px',
    height: '20px',
    borderRadius: '15px',
    color: 'white',
    boxShadow: '0 3px 7px rgba(192, 0, 0, 0.5025)',
  },
})(Badge);
