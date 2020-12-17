import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import React from 'react';
import { Box } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';
import NotificationsContext from '../NotificationsContext';
import NotificationsProgressLine from '../NotificationsProgressLine';
import NotificationBase from '../NotificationBase';
import NotificationMarker from '../NotificationMarker';

const useStyles = makeStyles(theme => ({
  marker: {
    position: 'absolute',
    top: theme.spacing(3),
    bottom: theme.spacing(3),
    left: 0,
    width: 6,
  },
  progressLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
}));

function getPropValue(localProp, globalProp) {
  return () => {
    if (localProp === null) {
      return globalProp;
    }

    return localProp;
  };
}

const Notification = React.forwardRef(
  (
    {
      id,
      variant,
      title,
      message,
      progressLine: localProgressLine,
      persist,
      autoHideDuration: localAutoHideDuration,
      darkMode: localDarkMode,
      onClose,
      marker: localMarker,
    },
    ref,
  ) => {
    const classes = useStyles();
    const { closeSnackbar } = useSnackbar();
    const {
      autoHideDuration: globalAutoHideDuration,
      darkMode: globalDarkMode,
      marker: globalMarker,
      progressLine: globalProgressLine,
    } = React.useContext(NotificationsContext);
    const autoHideDuration = React.useMemo(
      getPropValue(localAutoHideDuration, globalAutoHideDuration),
      [localAutoHideDuration, globalAutoHideDuration],
    );
    const darkMode = React.useMemo(
      getPropValue(localDarkMode, globalDarkMode),
      [localDarkMode, globalDarkMode],
    );
    const marker = React.useMemo(getPropValue(localMarker, globalMarker), [
      localMarker,
      globalMarker,
    ]);
    const progressLine = React.useMemo(
      getPropValue(localProgressLine, globalProgressLine),
      [localProgressLine, globalProgressLine],
    );
    const [renderProgressLine, setRenderProgressLine] = React.useState(
      progressLine,
    );
    const closeNotificationTimerRef = React.useRef();

    const handleClose = React.useCallback(() => {
      if (onClose) {
        onClose();
      }
      closeSnackbar(id);
    });

    const setCloseNotificationTimer = React.useCallback(() => {
      return setTimeout(handleClose, autoHideDuration);
    }, [handleClose, autoHideDuration]);

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
          {...{ variant, title, message, darkMode }}
          onCLose={handleClose}
        />
        {marker && (
          <NotificationMarker variant={variant} className={classes.marker} />
        )}
        {renderProgressLine && (
          <NotificationsProgressLine
            autoHideDuration={autoHideDuration}
            variant={variant}
            className={classes.progressLine}
          />
        )}
      </Box>
    );
  },
);

Notification.defaultProps = {
  darkMode: null,
  autoHideDuration: null,
  message: null,
  persist: false,
  progressLine: null,
  title: null,
  variant: 'info',
  onClose: null,
  marker: null,
};

Notification.propTypes = {
  darkMode: PropTypes.bool,
  autoHideDuration: PropTypes.number,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  message: PropTypes.node,
  persist: PropTypes.bool,
  progressLine: PropTypes.bool,
  title: PropTypes.node,
  variant: PropTypes.oneOf(['info', 'success', 'error']),
  onClose: PropTypes.func,
  marker: PropTypes.bool,
};

export default Notification;
