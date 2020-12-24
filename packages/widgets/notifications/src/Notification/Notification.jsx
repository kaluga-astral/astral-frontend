import PropTypes from 'prop-types';
import { merge } from 'lodash-es';
import { useSnackbar } from 'notistack';
import React from 'react';
import { Box } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';
import NotificationsContext from '../NotificationsContext';
import NotificationsProgressLine from '../NotificationsProgressLine';
import NotificationContainer from '../NotificationContainer';
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

class TimerManager {
  start(...args) {
    // eslint-disable-next-line no-underscore-dangle
    this._id = setTimeout(...args);
  }

  stop() {
    // eslint-disable-next-line no-underscore-dangle
    clearTimeout(this._id);
  }
}

const Notification = React.forwardRef(
  (
    {
      className,
      id,
      variant,
      title,
      message,
      persist,
      onClose,
      // свойствами ниже имеют приставку local, потому что далее
      // они будут сравниваться с глобальными свойствами из контекста
      progressLine: localProgressLine,
      autoHideDuration: localAutoHideDuration,
      marker: localMarker,
      palette: localPalette,
    },
    ref,
  ) => {
    const classes = useStyles();
    const { closeSnackbar } = useSnackbar();
    // получение глобальных свойств уведомления из контекста
    const {
      autoHideDuration: globalAutoHideDuration,
      marker: globalMarker,
      progressLine: globalProgressLine,
      palette: globalPalette,
    } = React.useContext(NotificationsContext);
    // если локальное свойство === null, то есть не задано,
    // бери глобальное
    const autoHideDuration = React.useMemo(
      () => localAutoHideDuration ?? globalAutoHideDuration,
      [localAutoHideDuration, globalAutoHideDuration],
    );
    const marker = React.useMemo(() => localMarker ?? globalMarker, [
      localMarker,
      globalMarker,
    ]);
    const progressLine = React.useMemo(
      () => localProgressLine ?? globalProgressLine,
      [localProgressLine, globalProgressLine],
    );
    // здесь происходит слияние палитры цветов. Можно указать только часть
    // цветов, а все остальные будут взяты из глобальной палитры
    const palette = React.useMemo(() => {
      return merge({}, globalPalette, localPalette);
    }, [localPalette, globalPalette]);
    // состояние для того, чтобы убирать линию прогресса при наведении
    // на уведомление. Линия прогресса - это бегущая полоса, которая
    // показывает как скоро исчезнет уведомление.
    const [renderProgressLine, setRenderProgressLine] = React.useState(
      progressLine,
    );
    // создание таймера, чтобы закрывать уведомление.
    const closeNotificationTimer = React.useMemo(() => new TimerManager(), []);
    // функция, которая будет выполнена при закрытии уведомления
    // независимо от того было ли оно закрыто по нажатию кнопки закрыть
    // или же само по себе.
    const handleClose = React.useCallback(() => {
      if (onClose) {
        onClose();
      }
      closeSnackbar(id);
    });
    // функция, устанавливающая таймер закрытия
    const setCloseNotificationTimer = React.useCallback(() => {
      return closeNotificationTimer.start(handleClose, autoHideDuration);
    }, [handleClose, autoHideDuration]);
    // запуск таймера закрытия
    React.useEffect(() => {
      if (!persist) {
        setCloseNotificationTimer();
      }
    }, []);
    // обнуление таймера закрытия при наведении мыши на уведомление
    const handleMouseEnter = React.useCallback(() => {
      closeNotificationTimer.stop();
      if (progressLine) {
        setRenderProgressLine(false);
      }
    }, [closeNotificationTimer]);
    // повторный запуск таймера закрытия при уходе мыши с уведомления
    const handleMouseLeave = React.useCallback(() => {
      setCloseNotificationTimer();
      if (progressLine) {
        setRenderProgressLine(true);
      }
    }, [closeNotificationTimer]);
    // получение фонового цвета и цвета текста
    // для компонента NotificationBase
    const notificationBaseColorProps = React.useMemo(() => {
      const { background, color } = palette[variant];

      return { background, color };
    }, [palette]);
    // получение цвета для компонента NotificationMarker
    const markerColor = React.useMemo(() => {
      const { markerColor: color } = palette[variant];

      return color;
    }, [palette]);
    // получение цвета для компонента NotificationProgressLine
    const progressLineColor = React.useMemo(() => {
      const { progressLineColor: color } = palette[variant];

      return color;
    }, [palette]);

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
        <NotificationContainer
          title={title}
          message={message}
          onClose={handleClose}
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
