import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Box } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(theme => {
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
});

const NotificationsProgressLine = ({
  autoHideDuration,
  variant,
  className,
}) => {
  const classes = useStyles(autoHideDuration);
  const color = React.useMemo(() => {
    switch (variant) {
      case 'info': {
        return 'primary.main';
      }
      case 'success': {
        return 'success.main';
      }
      case 'error': {
        return 'common.white';
      }
      default: {
        throw new Error('Invalid NotificationsProgressLine variant');
      }
    }
  });

  return <Box bgcolor={color} className={cn(className, classes.root)} />;
};

NotificationsProgressLine.defaultProps = {
  className: null,
};

NotificationsProgressLine.propTypes = {
  autoHideDuration: PropTypes.number.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['info', 'success', 'error']).isRequired,
};

export default NotificationsProgressLine;
