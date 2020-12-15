import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import React from 'react';
import { Box } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';
import NotificationsContext from '../NotificationsContext';
import NotificationsProgressLine from '../NotificationsProgressLine';
import NotificationBase from '../NotificationBase';
import NotificationMarker from '../NotificationMarker/NotificationMarker';

const useStyles = makeStyles(theme => ({
  marker: {
    position: 'absolute',
    top: theme.spacing(3),
    bottom: theme.spacing(3),
    left: 0,
    width: 6,
  },
  header: {
    '&:nth-last-child(n + 2)': {
      marginBottom: theme.spacing(1),
    },
  },
  progressLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
}));

const Notification = React.forwardRef(
  (
    {
      id,
      variant,
      title,
      message,
      progressLine,
      persist,
      autoHideDuration,
      darkMode,
      onClose,
      marker,
    },
    ref,
  ) => {
    const classes = useStyles();
    const { closeSnackbar } = useSnackbar();
    const [renderProgressLine, setRenderProgressLine] = React.useState(
      progressLine,
    );
    const closeNotificationTimerRef = React.useRef();
    const { autoHideDuration: defaultAutoHideDuration } = React.useContext(
      NotificationsContext,
    );
    const notificationDuration = React.useMemo(
      () => autoHideDuration || defaultAutoHideDuration,
    );
    const accentColor = React.useMemo(() => {
      switch (variant) {
        case 'info': {
          return 'primary.main';
        }
        case 'success': {
          return 'success.main';
        }
        case 'error': {
          return 'error.main';
        }
        default: {
          throw new Error('Invalid Notification variant');
        }
      }
    }, [variant]);

    const handleClose = React.useCallback(() => {
      if (onClose) {
        onClose();
      }
      closeSnackbar(id);
    });

    const setCloseNotificationTimer = React.useCallback(() => {
      return setTimeout(handleClose, notificationDuration);
    }, [handleClose, notificationDuration]);

    React.useEffect(() => {
      if (!persist) {
        closeNotificationTimerRef.current = setCloseNotificationTimer();
      }
    }, []);

    const handleMouseEnter = React.useCallback(() => {
      clearTimeout(closeNotificationTimerRef.current);
      if (progressLine) {
        setRenderProgressLine(false);
      }
    }, [closeNotificationTimerRef.current]);

    const handleMouseLeave = React.useCallback(() => {
      closeNotificationTimerRef.current = setCloseNotificationTimer();
      if (progressLine) {
        setRenderProgressLine(true);
      }
    }, [closeNotificationTimerRef.current]);

    return (
      <Box
        ref={ref}
        position="relative"
        borderRadius={8}
        overflow="hidden"
        {...(!persist && {
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
        })}
      >
        <NotificationBase
          {...{ title, message, darkMode }}
          handleCLose={handleClose}
        />
        {marker && (
          <NotificationMarker color={accentColor} className={classes.marker} />
        )}
        {renderProgressLine && (
          <NotificationsProgressLine
            autoHideDuration={notificationDuration}
            color={accentColor}
            className={classes.progressLine}
          />
        )}
      </Box>
    );
  },
);

Notification.defaultProps = {
  darkMode: false,
  autoHideDuration: null,
  message: null,
  persist: false,
  progressLine: false,
  title: null,
  variant: 'info',
  onClose: null,
  marker: true,
};

Notification.propTypes = {
  darkMode: PropTypes.bool,
  autoHideDuration: PropTypes.number,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  message: PropTypes.string,
  persist: PropTypes.bool,
  progressLine: PropTypes.bool,
  title: PropTypes.string,
  variant: PropTypes.oneOf(['info', 'success', 'error']),
  onClose: PropTypes.func,
  marker: PropTypes.bool,
};

export default Notification;
