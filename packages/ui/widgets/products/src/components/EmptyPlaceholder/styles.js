import { makeStyles } from '@astral-frontend/styles';

export default makeStyles(theme => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '142px 68px',
  },
  image: {
    marginBottom: 12,
  },
  message: {
    margin: 0,
    textAlign: 'center',
    color: theme.palette.grey[600],
  },
}));
