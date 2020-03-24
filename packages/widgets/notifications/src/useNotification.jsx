/* eslint-disable import/prefer-default-export */
import { useSnackbar } from 'notistack';
import React from 'react';
import NotificationsMessage from './NotificationsMessage';

export const useNotification = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return React.useMemo(
    () => ({
      closeNotification: closeSnackbar,
      enqueueCustomNotification(options) {
        return enqueueSnackbar('', options);
      },
      enqueueSuccessNotification({
        title = 'Успешно',
        message = '',
        duration = null,
        progressLine = true,
      }) {
        enqueueSnackbar('', {
          variant: 'success',
          content: key => (
            <NotificationsMessage
              id={key}
              variant="success"
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
      enqueueErrorNotification({
        title = 'Ошибка',
        message = '',
        duration = null,
        progressLine = true,
      }) {
        enqueueSnackbar('', {
          variant: 'error',
          content: key => (
            <NotificationsMessage
              id={key}
              variant="error"
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
      enqueueInfoNotification({
        title = 'Успешно',
        message = '',
        duration = null,
        progressLine = true,
      }) {
        enqueueSnackbar('', {
          variant: 'info',
          content: key => (
            <NotificationsMessage
              id={key}
              variant="info"
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
      enqueueSuccessTimerNotification({
        title = 'Успешно',
        message = '',
        duration = null,
        progressLine = false,
      }) {
        enqueueSnackbar('', {
          variant: 'success',
          content: key => (
            <NotificationsMessage
              id={key}
              variant="success"
              title={title}
              // TODO 29354
              message={
                typeof message === 'string'
                  ? message.replace('GraphQL error: ', '')
                  : message
              }
              duration={duration}
              progressLine={progressLine}
              timer
            />
          ),
        });
      },
      enqueueErrorTimerNotification({
        title = 'Ошибка',
        message = '',
        duration = null,
        progressLine = false,
      }) {
        enqueueSnackbar('', {
          variant: 'error',
          content: key => (
            <NotificationsMessage
              id={key}
              variant="error"
              title={title}
              // TODO 29354
              message={
                typeof message === 'string'
                  ? message.replace('GraphQL error: ', '')
                  : message
              }
              duration={duration}
              progressLine={progressLine}
              timer
            />
          ),
        });
      },
      enqueueInfoTimerNotification({
        title = 'Успешно',
        message = '',
        duration = null,
        progressLine = false,
      }) {
        enqueueSnackbar('', {
          variant: 'info',
          content: key => (
            <NotificationsMessage
              id={key}
              variant="info"
              title={title}
              // TODO 29354
              message={
                typeof message === 'string'
                  ? message.replace('GraphQL error: ', '')
                  : message
              }
              duration={duration}
              progressLine={progressLine}
              timer
            />
          ),
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
    }),
    [],
  );
};
