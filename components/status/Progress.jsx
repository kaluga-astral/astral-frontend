import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

export default withStyles({
  bar: {
    background: 'linear-gradient(90deg, rgba(0, 139, 236, 0.7) 51.62%, #008BEC 100%)',
  },
})(LinearProgress);
