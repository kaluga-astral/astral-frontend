import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { makeStyles } from '@astral-frontend/styles';

import NotificationsContext from '../NotificationsContext';

const useStyles = makeStyles(theme => {
  const getAnimationDuration = ({ duration }) => `${duration}ms`;
  const getBackgroundColor = ({ variant }) => {
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
        throw new Error('Unexpected ProgressLine variant type');
    }
  };

  return {
    '@keyframes slideRight': {
      from: { transform: 'scale(0, 1)' },
      to: { transform: 'scale(1, 1)' },
    },
    root: {
      width: '100%',
      height: theme.spacing(1),
      animationName: '$slideRight',
      animationDuration: getAnimationDuration,
      animationTimingFunction: 'linear',
      backgroundColor: getBackgroundColor,
      transformOrigin: '0 50%',
      willСhange: 'transform',
    },
  };
});

const NotificationsProgressLine = props => {
  const { className, duration } = props;
  const { notificationDuration } = React.useContext(NotificationsContext);
  const classes = useStyles(
    duration ? props : { ...props, duration: notificationDuration },
  );

  return <div className={cn(classes.root, className)} />;
};

NotificationsProgressLine.defaultProps = {
  className: undefined,
  duration: undefined,
};

NotificationsProgressLine.propTypes = {
  className: PropTypes.string,
  duration: PropTypes.number,
};

export default NotificationsProgressLine;
