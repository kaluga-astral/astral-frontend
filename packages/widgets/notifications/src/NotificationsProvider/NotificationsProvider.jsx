import PropTypes from 'prop-types';
import React from 'react';
import { SnackbarProvider } from 'notistack';

import NotificationsContext from '../NotificationsContext';

const DEFAULT_NOTIFICATION_DURATION = 5000;

const NotificationsProvider = ({ autoHideDuration, children }) => (
  <NotificationsContext.Provider value={{ autoHideDuration }}>
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
  autoHideDuration: DEFAULT_NOTIFICATION_DURATION,
};

NotificationsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  autoHideDuration: PropTypes.number,
};

export default NotificationsProvider;
