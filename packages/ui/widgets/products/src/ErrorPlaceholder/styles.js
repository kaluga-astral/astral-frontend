import { makeStyles } from '@astral-frontend/styles';

export default makeStyles(theme => ({
  container: {
    padding: '95px 62px',
  },
  image: {
    width: 178,
    height: 153,
    marginBottom: 48,
  },
  messageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorIcon: {
    marginRight: 9,
    fill: theme.palette.error.main,
  },
  message: {
    margin: 0,
    fontSize: 17,
    lineHeight: '25px',
    color: theme.palette.error.main,
  },
}));
