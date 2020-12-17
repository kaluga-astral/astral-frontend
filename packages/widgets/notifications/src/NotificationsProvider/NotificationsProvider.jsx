import PropTypes from 'prop-types';
import React from 'react';
import { SnackbarProvider } from 'notistack';

import NotificationsContext from '../NotificationsContext';

const DEFAULT_NOTIFICATION_DURATION = 5000;

const NotificationsProvider = ({
  anchorOrigin,
  autoHideDuration,
  children,
  darkMode,
  marker,
  maxSnack,
  progressLine,
}) => (
  <NotificationsContext.Provider
    value={{ autoHideDuration, darkMode, marker, progressLine }}
  >
    <SnackbarProvider
      maxSnack={maxSnack}
      anchorOrigin={anchorOrigin}
      autoHideDuration={null}
    >
      {children}
    </SnackbarProvider>
  </NotificationsContext.Provider>
);

NotificationsProvider.defaultProps = {
  anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
  autoHideDuration: DEFAULT_NOTIFICATION_DURATION,
  darkMode: false,
  marker: false,
  maxSnack: 12,
  progressLine: false,
};

NotificationsProvider.propTypes = {
  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.oneOf(['top', 'bottom']),
    horizontal: PropTypes.oneOf(['left', 'center', 'right']),
  }),
  autoHideDuration: PropTypes.number,
  children: PropTypes.node.isRequired,
  darkMode: PropTypes.bool,
  marker: PropTypes.bool,
  maxSnack: PropTypes.number,
  progressLine: PropTypes.bool,
};

export default NotificationsProvider;
