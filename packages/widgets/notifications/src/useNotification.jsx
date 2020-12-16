/* eslint-disable import/prefer-default-export */
import { useSnackbar } from 'notistack';
import React from 'react';

import NotificationsSystemNotification from './NotificationsSystemNotification';
import Notification from './Notification';

export const useNotification = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const enqueueCustomNotification = options => {
    return enqueueSnackbar('', options);
  };
  const enqueueNotification = ({
    variant = 'info',
    title,
    message,
    progressLine,
    autoHideDuration,
    darkMode = false,
    persist = false,
    marker,
  }) => {
    return enqueueSnackbar('', {
      persist: true,
      content: key => (
        <Notification
          id={key}
          {...{
            variant,
            title,
            message,
            progressLine,
            autoHideDuration,
            darkMode,
            persist,
            marker,
          }}
        />
      ),
    });
  };
  const enqueueInfoNotification = props => {
    return enqueueNotification({ title: 'Успешно', ...props, variant: 'info' });
  };
  const enqueueSuccessNotification = props => {
    return enqueueNotification({
      title: 'Успешно',
      ...props,
      variant: 'success',
    });
  };
  const enqueueErrorNotification = props => {
    return enqueueNotification({ title: 'Ошибка', ...props, variant: 'error' });
  };

  return React.useMemo(
    () => ({
      closeNotification: closeSnackbar,
      enqueueCustomNotification,
      enqueueNotification,
      enqueueInfoNotification,
      enqueueSuccessNotification,
      enqueueErrorNotification,
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
      // enqueueSuccessNotification({
      //   title = 'Успешно',
      //   message = '',
      //   duration = null,
      //   progressLine = true,
      // }) {
      //   enqueueSnackbar('', {
      //     variant: 'success',
      //     content: key => (
      //       <NotificationsMessage
      //         id={key}
      //         variant="success"
      //         title={title}
      //         // TODO 29354
      //         message={
      //           typeof message === 'string'
      //             ? message.replace('GraphQL error: ', '')
      //             : message
      //         }
      //         duration={duration}
      //         progressLine={progressLine}
      //       />
      //     ),
      //   });
      // },
      // enqueueErrorNotification({
      //   title = 'Ошибка',
      //   message = '',
      //   duration = null,
      //   progressLine = true,
      //   ...options
      // }) {
      //   enqueueSnackbar('', {
      //     ...options,
      //     variant: 'error',
      //     content: key => (
      //       <NotificationsMessage
      //         id={key}
      //         variant="error"
      //         title={title}
      //         // TODO 29354
      //         message={
      //           typeof message === 'string'
      //             ? message.replace('GraphQL error: ', '')
      //             : message
      //         }
      //         duration={duration}
      //         progressLine={progressLine}
      //       />
      //     ),
      //   });
      // },
      // enqueueInfoNotification({
      //   title = 'Успешно',
      //   message = '',
      //   duration = null,
      //   progressLine = true,
      //   ...options
      // }) {
      //   enqueueSnackbar('', {
      //     variant: 'info',
      //     content: key => (
      //       <NotificationsMessage
      //         id={key}
      //         variant="info"
      //         title={title}
      //         // TODO 29354
      //         message={
      //           typeof message === 'string'
      //             ? message.replace('GraphQL error: ', '')
      //             : message
      //         }
      //         duration={duration}
      //         progressLine={progressLine}
      //       />
      //     ),
      //     ...options,
      //   });
      // },
      // enqueueDeleteNotification({
      //   title = 'Удаление',
      //   message = '',
      //   duration = null,
      //   progressLine = true,
      // }) {
      //   enqueueSnackbar('', {
      //     variant: 'delete',
      //     content: key => (
      //       <NotificationsMessage
      //         id={key}
      //         variant="delete"
      //         title={title}
      //         // TODO 29354
      //         message={
      //           typeof message === 'string'
      //             ? message.replace('GraphQL error: ', '')
      //             : message
      //         }
      //         duration={duration}
      //         progressLine={progressLine}
      //       />
      //     ),
      //   });
      // },
      // enqueueNotification({
      //   variant = 'info',
      //   title,
      //   message,
      //   progressLine,
      //   autoHideDuration,
      //   darkMode = false,
      //   persist = false,
      //   marker,
      // }) {
      //   enqueueSnackbar('', {
      //     persist: true,
      //     content: key => (
      //       <Notification
      //         id={key}
      //         {...{
      //           variant,
      //           title,
      //           message,
      //           progressLine,
      //           autoHideDuration,
      //           darkMode,
      //           persist,
      //           marker,
      //         }}
      //       />
      //     ),
      //   });
      // },
    }),
    [],
  );
};
