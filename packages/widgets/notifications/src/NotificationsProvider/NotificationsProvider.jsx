import PropTypes from 'prop-types';
import React from 'react';
import { SnackbarProvider } from 'notistack';

import NotificationsContext from '../NotificationsContext';

const DEFAULT_NOTIFICATION_DURATION = 5000;

const NotificationsProvider = ({
  autoHideDuration,
  children,
  darkMode,
  marker,
  progressLine,
}) => (
  <NotificationsContext.Provider
    value={{ autoHideDuration, darkMode, marker, progressLine }}
  >
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
  darkMode: false,
  marker: false,
  progressLine: false,
};

NotificationsProvider.propTypes = {
  autoHideDuration: PropTypes.number,
  children: PropTypes.node.isRequired,
  darkMode: PropTypes.bool,
  marker: PropTypes.bool,
  progressLine: PropTypes.bool,
};

export default NotificationsProvider;
