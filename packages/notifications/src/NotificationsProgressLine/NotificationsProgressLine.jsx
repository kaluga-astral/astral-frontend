import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Box } from '@astral/components';
import { makeStyles } from '@astral/styles';

const useStyles = makeStyles(
  theme => {
    const getAnimationDuration = autoHideDuration => `${autoHideDuration}ms`;

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
        transformOrigin: '0 50%',
        willСhange: 'transform',
      },
    };
  },
  { name: 'NotificationsProgressLine' },
);

const NotificationsProgressLine = ({ autoHideDuration, color, className }) => {
  const classes = useStyles(autoHideDuration);

  return <Box bgcolor={color} className={cn(className, classes.root)} />;
};

NotificationsProgressLine.defaultProps = {
  className: null,
};

NotificationsProgressLine.propTypes = {
  autoHideDuration: PropTypes.number.isRequired,
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
};

export default NotificationsProgressLine;
