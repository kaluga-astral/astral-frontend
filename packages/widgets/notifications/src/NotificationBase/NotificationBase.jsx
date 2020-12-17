import PropTypes from 'prop-types';
import React from 'react';
import { Box, IconButton } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(theme => ({
  header: {
    '&:nth-last-child(n + 2)': {
      marginBottom: theme.spacing(2),
    },
  },
}));

const NotificationBase = ({ variant, title, message, darkMode, onCLose }) => {
  const classes = useStyles();
  const color = React.useMemo(() => {
    if (variant === 'error') {
      return 'common.white';
    }

    return darkMode ? 'common.white' : 'common.black';
  }, [darkMode, variant]);
  const backgroundColor = React.useMemo(() => {
    if (variant === 'error') {
      return 'error.main';
    }

    return darkMode ? 'text.primary' : 'common.white';
  }, [darkMode, variant]);

  return (
    <Box
      position="relative"
      maxWidth={450}
      px={5}
      py={4}
      bgcolor={backgroundColor}
      borderRadius={8}
      color={color}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        className={classes.header}
      >
        <Box fontWeight="bold">{title}</Box>
        <Box
          flexShrink={0}
          ml={2}
          width={24}
          height={24}
          color={color}
          component={IconButton}
          onClick={onCLose}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.05064 0.636039C1.66011 0.245515 1.02695 0.245514 0.636422 0.636039C0.245897 1.02656 0.245897 1.65973 0.636422 2.05025L5.58617 7L0.636422 11.9497C0.245898 12.3403 0.245898 12.9734 0.636422 13.364C1.02695 13.7545 1.66011 13.7545 2.05064 13.364L7.00038 8.41421L11.9501 13.364C12.3407 13.7545 12.9738 13.7545 13.3643 13.364C13.7549 12.9734 13.7549 12.3403 13.3643 11.9497L8.4146 7L13.3643 2.05025C13.7549 1.65973 13.7549 1.02656 13.3643 0.636039C12.9738 0.245514 12.3407 0.245515 11.9501 0.636039L7.00038 5.58579L2.05064 0.636039Z" />
          </svg>
        </Box>
      </Box>
      {message && <Box>{message}</Box>}
    </Box>
  );
};

NotificationBase.defaultProps = {
  message: null,
  title: null,
};

NotificationBase.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  message: PropTypes.node,
  title: PropTypes.node,
  onCLose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['info', 'success', 'error']).isRequired,
};

export default NotificationBase;
