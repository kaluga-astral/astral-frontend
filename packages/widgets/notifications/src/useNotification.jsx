/* eslint-disable import/prefer-default-export */
import { useSnackbar } from 'notistack';
import React from 'react';

import NotificationsMessage from './NotificationsMessage';
import NotificationsSystemNotification from './NotificationsSystemNotification';
import Notification from './Notification';

export const useNotification = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const enqueueNotification = ({
    className,
    variant,
    title,
    message,
    progressLine,
    persist,
    autoHideDuration,
    darkMode,
    onClose,
    marker,
    palette,
    darkModePalette,
    ...props
  }) => {
    return enqueueSnackbar('', {
      content: key => (
        <Notification
          id={key}
          {...{
            className,
            variant,
            title,
            message,
            progressLine,
            persist,
            autoHideDuration,
            darkMode,
            onClose,
            marker,
            palette,
            darkModePalette,
          }}
        />
      ),
      ...props,
    });
  };

  const enqueueInfoNotification = props => {
    return enqueueNotification({
      ...props,
      variant: 'info',
    });
  };

  const enqueueSuccessNotification = props => {
    return enqueueNotification({
      ...props,
      variant: 'success',
    });
  };

  const enqueueErrorNotification = ({ message, ...props }) => {
    return enqueueNotification({
      ...props,
      message:
        typeof message === 'string'
          ? message.replace('GraphQL error: ', '')
          : message,
      variant: 'error',
    });
  };

  return {
    closeNotification: closeSnackbar,
    enqueueNotification,
    enqueueInfoNotification,
    enqueueSuccessNotification,
    enqueueErrorNotification,
    enqueueCustomNotification(options) {
      return enqueueSnackbar('', options);
    },
    enqueueSystemNotification({ options, Component, ...props }) {
      return enqueueSnackbar('', {
        persist: true,
        content: key => {
          return (
            <NotificationsSystemNotification
              onClose={() => closeSnackbar(key)}
              {...props}
            >
              <Component />
            </NotificationsSystemNotification>
          );
        },
        ...options,
      });
    },
    enqueueDeleteNotification({
      title = 'Удаление',
      message = '',
      duration = null,
      progressLine = true,
    }) {
      enqueueSnackbar('', {
        variant: 'delete',
        content: key => (
          <NotificationsMessage
            id={key}
            variant="delete"
            title={title}
            // TODO 29354
            message={
              typeof message === 'string'
                ? message.replace('GraphQL error: ', '')
                : message
            }
            duration={duration}
            progressLine={progressLine}
          />
        ),
      });
    },
  };
};
