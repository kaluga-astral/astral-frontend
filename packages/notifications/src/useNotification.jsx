/* eslint-disable import/prefer-default-export */
import { useSnackbar } from 'notistack';
import React from 'react';

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
    onClose,
    marker,
    palette,
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
            onClose,
            marker,
            palette,
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

  const enqueueErrorNotification = ({
    title = 'Ошибка',
    message,
    ...props
  }) => {
    return enqueueNotification({
      title,
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
    enqueueInfoNotification,
    enqueueSuccessNotification,
    enqueueErrorNotification,
    enqueueCustomNotification(options) {
      return enqueueSnackbar('', options);
    },
  };
};
