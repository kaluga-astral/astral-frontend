import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Box } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(theme => {
  const getAnimationDuration = ({ autoHideDuration }) =>
    `${autoHideDuration}ms`;

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

const NotificationsProgressLine = props => {
  const { className, color } = props;
  const classes = useStyles(props);

  return <Box bgcolor={color} className={cn(className, classes.root)} />;
};

NotificationsProgressLine.defaultProps = {
  className: null,
};

NotificationsProgressLine.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary.main', 'success.main', 'error.main'])
    .isRequired,
};

export default NotificationsProgressLine;
