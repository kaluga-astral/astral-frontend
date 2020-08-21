import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { IconButton, Box, Grid } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import NotificationsSystemNotificationBellIcon from './NotificationsSystemNotificationBellIcon';
import NotificationsSystemNotificationCrossIcon from './NotificationsSystemNotificationCrossIcon';

const useStyles = makeStyles(
  theme => ({
    root: {
      position: 'relative',
      width: '310px',
      padding: theme.spacing(4),
      backgroundColor: theme.palette.gray[800],
      borderRadius: 8,
      color: theme.palette.common.white,
    },
    systemNotifitionWrapper: {
      padding: theme.spacing(1, 2),
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.shape.borderRadius,
    },
    systemNotificationIcon: {
      width: 12,
      height: 12,
      marginRight: theme.spacing(1),
    },
    systemNotifitionText: {
      fontSize: theme.typography.pxToRem(10),
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: theme.typography.pxToRem(14),
    },
    notificationBody: {
      marginTop: theme.spacing(6),
    },
    abonentLink: {
      color: theme.palette.common.white,
    },
  }),
  { name: 'NotificationsSystemNotification' },
);

const NotificationsSystemNotification = React.forwardRef(
  ({ onClose, className, children, ...props }, ref) => {
    const classes = useStyles();

    return (
      <Box
        {...props}
        className={cn(className, classes.root)}
        direction="column"
        ref={ref}
      >
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Grid
              container
              alignItems="center"
              className={classes.systemNotifitionWrapper}
            >
              <NotificationsSystemNotificationBellIcon
                className={classes.systemNotificationIcon}
                viewBox="0 0 12 12"
              />
              <span className={classes.systemNotifitionText}>
                Системное уведомление
              </span>
            </Grid>
          </Grid>
          <IconButton onClick={onClose}>
            <NotificationsSystemNotificationCrossIcon />
          </IconButton>
        </Grid>
        <div className={classes.notificationBody}>{children}</div>
      </Box>
    );
  },
);

NotificationsSystemNotification.defaultProps = {
  className: null,
};

NotificationsSystemNotification.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default NotificationsSystemNotification;
