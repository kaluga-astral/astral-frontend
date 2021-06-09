import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Box } from '@astral/components';
import { makeStyles } from '@astral/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
    },
  }),
  { name: 'NotificationMarker' },
);

const NotificationMarker = ({ color, className }) => {
  const classes = useStyles();

  return <Box bgcolor={color} className={cn(classes.root, className)} />;
};

NotificationMarker.defaultProps = {
  className: null,
};

NotificationMarker.propTypes = {
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default NotificationMarker;
