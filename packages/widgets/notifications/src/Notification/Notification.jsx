import PropTypes from 'prop-types';
import { merge } from 'lodash-es';
import { useSnackbar } from 'notistack';
import React from 'react';
import { Box } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';
import NotificationsContext from '../NotificationsContext';
import NotificationsProgressLine from '../NotificationsProgressLine';
import NotificationBase from '../NotificationBase';
import NotificationMarker from '../NotificationMarker';

const useStyles = makeStyles(
  theme => ({
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
  }),
  { name: 'Notification' },
);

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
      className,
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
      palette: localPalette,
      darkModePalette: localDarkModePalette,
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
      palette: globalPalette,
      darkModePalette: globalDarkModePalette,
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
    const palette = React.useMemo(() => {
      return merge(globalPalette, localPalette);
    }, [localPalette, globalPalette]);
    const darkModePalette = React.useMemo(() => {
      return merge(globalDarkModePalette, localDarkModePalette);
    }, [localDarkModePalette, globalDarkModePalette]);

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

    /// ///////////////////////////
    /// ///////////////////////////
    /// ///////////////////////////

    const currentPalette = React.useMemo(() => {
      return darkMode ? darkModePalette : palette;
    }, [darkMode, darkModePalette, palette]);

    const notificationBaseColorProps = React.useMemo(() => {
      const { background, color } = currentPalette[variant];

      return { background, color };
    }, [currentPalette]);

    const markerColor = React.useMemo(() => {
      const { markerColor: color } = currentPalette[variant];

      return color;
    }, [currentPalette]);

    const progressLineColor = React.useMemo(() => {
      const { progressLineColor: color } = currentPalette[variant];

      return color;
    }, [currentPalette]);

    return (
      <Box
        className={className}
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
          title={title}
          message={message}
          onCLose={handleClose}
          {...notificationBaseColorProps}
        />
        {marker && (
          <NotificationMarker color={markerColor} className={classes.marker} />
        )}
        {!persist && renderProgressLine && (
          <NotificationsProgressLine
            autoHideDuration={autoHideDuration}
            color={progressLineColor}
            className={classes.progressLine}
          />
        )}
      </Box>
    );
  },
);

Notification.defaultProps = {
  className: null,
  darkMode: null,
  autoHideDuration: null,
  message: null,
  persist: false,
  progressLine: null,
  title: null,
  variant: 'info',
  onClose: null,
  marker: null,
  palette: {},
  darkModePalette: {},
};

Notification.propTypes = {
  className: PropTypes.string,
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
  palette: PropTypes.shape({
    info: PropTypes.shape({
      background: PropTypes.string,
      color: PropTypes.string,
      markerColor: PropTypes.string,
      progressLineColor: PropTypes.string,
    }),
    success: PropTypes.shape({
      background: PropTypes.string,
      color: PropTypes.string,
      markerColor: PropTypes.string,
      progressLineColor: PropTypes.string,
    }),
    error: PropTypes.shape({
      background: PropTypes.string,
      color: PropTypes.string,
      markerColor: PropTypes.string,
      progressLineColor: PropTypes.string,
    }),
  }),
  darkModePalette: PropTypes.shape({
    info: PropTypes.shape({
      background: PropTypes.string,
      color: PropTypes.string,
      markerColor: PropTypes.string,
      progressLineColor: PropTypes.string,
    }),
    success: PropTypes.shape({
      background: PropTypes.string,
      color: PropTypes.string,
      markerColor: PropTypes.string,
      progressLineColor: PropTypes.string,
    }),
    error: PropTypes.shape({
      background: PropTypes.string,
      color: PropTypes.string,
      markerColor: PropTypes.string,
      progressLineColor: PropTypes.string,
    }),
  }),
};

export default Notification;
