import PropTypes from 'prop-types';
import React from 'react';
import { SnackbarProvider } from 'notistack';

import NotificationsContext from '../NotificationsContext';

const DEFAULT_NOTIFICATION_DURATION = 5000;

const NotificationsProvider = ({ notificationDuration, children }) => (
  <NotificationsContext.Provider value={{ notificationDuration }}>
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={null}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      {children}
    </SnackbarProvider>
  </NotificationsContext.Provider>
);

NotificationsProvider.defaultProps = {
  notificationDuration: DEFAULT_NOTIFICATION_DURATION,
};

NotificationsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  notificationDuration: PropTypes.number,
};

export default NotificationsProvider;
