import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles(theme => {
  const getMainColor = ({ variant }) => {
    switch (variant) {
      case 'success':
        return theme.palette.primary.main;
      case 'info':
        return theme.palette.primary.main;
      case 'error':
        return theme.palette.error.main;
      case 'delete':
        return theme.palette.error.main;
      default:
        throw new Error('Unexpected variant');
    }
  };

  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      color: getMainColor,
      fontSize: theme.typography.pxToRem(12),
    },
    circularProgress: {},
    seconds: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      lineHeight: theme.typography.pxToRem(20),
      transform: 'translate(-50%, -50%)',
    },
  };
});

const NotificationsTimer = props => {
  const { duration, id } = props;
  const classes = useStyles(props);
  const { closeSnackbar } = useSnackbar();
  const [value, setValue] = React.useState(0);
  const startTime = Date.now();
  const calculatePercentComplete = () => {
    requestAnimationFrame(() => {
      const percentComplete = ((Date.now() - startTime) / duration) * 100;
      setValue(percentComplete);
      if (percentComplete <= 100) calculatePercentComplete();
      else closeSnackbar(id);
    });
  };

  React.useEffect(() => {
    calculatePercentComplete();
  }, []);

  return (
    <div className={classes.root}>
      <CircularProgress
        className={classes.circularProgress}
        variant="determinate"
        value={value}
        size={20}
        color="inherit"
      />
      <b className={classes.seconds}>
        {Math.ceil((duration - duration * (value / 100)) / 1000)}
      </b>
    </div>
  );
};

NotificationsTimer.propTypes = {
  duration: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default NotificationsTimer;
