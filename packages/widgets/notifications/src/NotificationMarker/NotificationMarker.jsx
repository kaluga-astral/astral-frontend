import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
    },
  }),
  { name: 'NotificationMarker' },
);

const NotificationMarker = ({ variant, className }) => {
  const classes = useStyles();
  const color = React.useMemo(() => {
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
        throw new Error('Invalid NotificationMarker variant');
      }
    }
  }, [variant]);

  return <Box bgcolor={color} className={cn(classes.root, className)} />;
};

NotificationMarker.defaultProps = {
  className: null,
};

NotificationMarker.propTypes = {
  variant: PropTypes.oneOf(['info', 'success', 'error']).isRequired,
  className: PropTypes.string,
};

export default NotificationMarker;
