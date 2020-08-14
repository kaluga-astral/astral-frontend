import { useSnackbar } from 'notistack';
import React from 'react';
import PropTypes from 'prop-types';

import {
  Paper,
  FlexContainer,
  FlexItem,
  IconButton,
} from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import NotificationsInformationIcon from '../NotificationsInformationIcon';
import NotificationsErrorIcon from '../NotificationsErrorIcon';
import NotificationsSuccessIcon from '../NotificationsSuccessIcon';
import NotificationsProgressLine from '../NotificationsProgressLine';
import NotificationsTimer from '../NotificationsTimer';
import NotificationsContext from '../NotificationsContext';
import NotificationsDeleteIcon from '../NotificationsDeleteIcon';

const useStyles = makeStyles(theme => {
  const getTitleColor = ({ variant }) => {
    switch (variant) {
      case 'error':
        return theme.palette.error.main;
      case 'delete':
        return theme.palette.error.main;
      case 'info':
        return theme.palette.primary.main;
      case 'success':
        return theme.palette.primary.main;
      default:
        throw new Error('unexpected NotificationMessage variant');
    }
  };

  return {
    root: {
      position: 'relative',
      padding: theme.spacing(3, 4, 8),
      overflow: 'hidden',
    },
    header: {
      marginBottom: '10px',
    },
    icon: {
      marginRight: '10px',
    },
    title: {
      fontSize: '14px',
      marginRight: '10px',
      color: getTitleColor,
    },
    message: {
      maxWidth: '600px',
      color: theme.palette.gray[600],
    },
    progressLine: {
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
  };
});

const NotificationsMessage = React.forwardRef((props, ref) => {
  const {
    id,
    variant,
    duration,
    title,
    message,
    progressLine = true,
    timer = false,
  } = props;
  const classes = useStyles(props);
  const { closeSnackbar } = useSnackbar();
  const timerRef = React.useRef();
  const { notificationDuration } = React.useContext(NotificationsContext);
  const handleDismiss = () => {
    closeSnackbar(id);
  };
  const getIcon = () => {
    switch (variant) {
      case 'info':
        return <NotificationsInformationIcon />;
      case 'error':
        return <NotificationsErrorIcon />;
      case 'success':
        return <NotificationsSuccessIcon />;
      case 'delete':
        return <NotificationsDeleteIcon />;
      default:
        throw new Error('Unexpected NotificationMessage variant');
    }
  };
  const [renderProgressLine, setRenderProgressLine] = React.useState(true);
  const setTimer = () =>
    setTimeout(closeSnackbar, duration || notificationDuration, id);
  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setRenderProgressLine(false);
  };
  const handleMouseLeave = () => {
    timerRef.current = setTimer();
    setRenderProgressLine(true);
  };
  React.useEffect(() => {
    timerRef.current = setTimer();
    setRenderProgressLine(true);
  }, [notificationDuration]);

  return (
    <Paper
      className={classes.root}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FlexContainer
        component="header"
        alignItems="center"
        className={classes.header}
      >
        <FlexItem className={classes.icon}>
          {timer ? (
            <NotificationsTimer
              id={id}
              variant={variant}
              duration={duration || notificationDuration}
            />
          ) : (
            getIcon()
          )}
        </FlexItem>
        <FlexItem grow={1} className={classes.title}>
          {title}
        </FlexItem>
        <FlexItem component={IconButton} size="small" onClick={handleDismiss}>
          <svg width="10" height="10" viewBox="0 0 10 10">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.56533 9.87256C9.64686 9.87256 9.72508 9.84015 9.78272 9.78247C9.84039 9.72484 9.8728 9.64662 9.87278 9.56507C9.87278 9.48354 9.84037 9.40532 9.7827 9.34768L5.43507 5.00006L9.78274 0.652392C9.90279 0.532341 9.90277 0.337693 9.78272 0.217642C9.66267 0.097591 9.46802 0.097572 9.34795 0.217642L5.0003 4.56529L0.652257 0.217243C0.532206 0.0971915 0.337557 0.0971727 0.217487 0.217243C0.0974171 0.337313 0.0974355 0.531962 0.217487 0.652013L4.56553 5.00006L0.217487 9.3481C0.0974357 9.46815 0.0974168 9.6628 0.217487 9.78287C0.337556 9.90294 0.532205 9.90292 0.652256 9.78287L5.0003 5.43483L9.34795 9.78247C9.40558 9.84015 9.4838 9.87256 9.56533 9.87256Z"
              fill="#99A9BA"
            />
          </svg>
        </FlexItem>
      </FlexContainer>
      <div className={classes.message}>{message}</div>
      {progressLine && renderProgressLine ? (
        <NotificationsProgressLine
          className={classes.progressLine}
          variant={variant}
          duration={duration}
        />
      ) : null}
    </Paper>
  );
});

NotificationsMessage.defaultProps = {
  duration: undefined,
  progressLine: true,
  timer: false,
};

NotificationsMessage.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  message: PropTypes.node.isRequired,
  progressLine: PropTypes.bool,
  duration: PropTypes.number,
  timer: PropTypes.bool,
};

export default NotificationsMessage;
