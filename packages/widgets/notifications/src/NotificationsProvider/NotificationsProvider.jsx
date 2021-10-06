import PropTypes from 'prop-types';
import { merge } from 'lodash-es';
import React from 'react';
import { SnackbarProvider } from 'notistack-next';
import { makeStyles, useTheme } from '@astral-frontend/styles';

import NotificationsContext from '../NotificationsContext';

const DEFAULT_NOTIFICATION_DURATION = 5000;

const useStyles = makeStyles(
  () => {
    return {
      root: {
        pointerEvents: 'all',
      },
    };
  },
  {
    name: 'NotificationsProvider',
  },
);

export const NotificationsProvider = ({
  anchorOrigin,
  autoHideDuration,
  children,
  marker,
  maxSnack,
  progressLine,
  palette: paletteProp,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const palette = React.useMemo(() => {
    return merge(
      {
        info: {
          background: theme.palette.common.white,
          color: theme.palette.common.black,
          markerColor: theme.palette.primary.main,
          progressLineColor: theme.palette.primary.main,
        },
        success: {
          background: theme.palette.common.white,
          color: theme.palette.common.black,
          markerColor: theme.palette.success.main,
          progressLineColor: theme.palette.success.main,
        },
        error: {
          background: theme.palette.common.white,
          color: theme.palette.common.black,
          markerColor: theme.palette.error.main,
          progressLineColor: theme.palette.error.main,
        },
      },
      paletteProp,
    );
  }, [paletteProp]);

  return (
    <NotificationsContext.Provider
      value={{
        autoHideDuration,
        marker,
        progressLine,
        palette,
      }}
    >
      <SnackbarProvider
        classes={classes}
        maxSnack={maxSnack}
        anchorOrigin={anchorOrigin}
        autoHideDuration={null}
      >
        {children}
      </SnackbarProvider>
    </NotificationsContext.Provider>
  );
};

NotificationsProvider.defaultProps = {
  anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
  autoHideDuration: DEFAULT_NOTIFICATION_DURATION,
  marker: false,
  maxSnack: 12,
  progressLine: false,
  palette: {},
};

NotificationsProvider.propTypes = {
  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.oneOf(['top', 'bottom']),
    horizontal: PropTypes.oneOf(['left', 'center', 'right']),
  }),
  autoHideDuration: PropTypes.number,
  children: PropTypes.node.isRequired,
  marker: PropTypes.bool,
  maxSnack: PropTypes.number,
  progressLine: PropTypes.bool,
  palette: PropTypes.shape({
    info: PropTypes.shape({
      background: PropTypes.string,
      color: PropTypes.string,
      markerColor: PropTypes.string,
      progressLineColor: PropTypes.string,
    }),
    success: PropTypes.shape({
      background: PropTypes.string,
      color: PropTypes.string,
      markerColor: PropTypes.string,
      progressLineColor: PropTypes.string,
    }),
    error: PropTypes.shape({
      background: PropTypes.string,
      color: PropTypes.string,
      markerColor: PropTypes.string,
      progressLineColor: PropTypes.string,
    }),
  }),
};

export default NotificationsProvider;
