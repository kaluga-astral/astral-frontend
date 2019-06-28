import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Drawer } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';
import { ClickAwayListener } from '@astral-frontend/core';

import MainModalContext from './MainModalContext';

const useStyles = makeStyles(() => {
  const getWidth = ({ size }) => {
    switch (size) {
      case 'small':
        return '40%';
      case 'medium':
        return '60%';
      case 'large':
        return '80%';
      default:
        return null;
    }
  };

  return {
    paper: {
      width: getWidth,
      padding: 24,
      boxShadow: '0px 4px 56px rgba(0, 0, 0, 0.1)',
    },
  };
});

const DashboardLayoutMainModal = ({
  anchor,
  ModalProps,
  PaperProps,
  BackdropProps,
  onClose,
  container,
  children,
  ...props
}) => {
  const classes = useStyles(props);
  const modalPositionStyle = container ? { position: 'absolute' } : {};

  // для того, чтобы Drawer был в контейнере
  useEffect(() => {
    /* eslint-disable-next-line */
    if (container) container.style.position = 'relative';
  }, [container]);

  // ClickAwayListener нужен когда модалка находится не на уровне body
  return (
    <MainModalContext.Provider value={{ onClose }}>
      <ClickAwayListener onClickAway={onClose}>
        <Drawer
          {...props}
          classes={classes}
          transitionDuration={400}
          ModalProps={{
            disablePortal: Boolean(container),
            onBackdropClick: onClose,
            onEscapeKeyDown: onClose,
            style: modalPositionStyle,
            container,
            ...ModalProps,
          }}
          PaperProps={{
            style: modalPositionStyle,
            ...PaperProps,
          }}
          BackdropProps={{
            style: {
              backgroundColor: 'transparent',
              ...modalPositionStyle,
            },
            ...BackdropProps,
          }}
          anchor={anchor}
          variant="temporary"
        >
          {children}
        </Drawer>
      </ClickAwayListener>
    </MainModalContext.Provider>
  );
};

DashboardLayoutMainModal.defaultProps = {
  children: null,
  container: false,
  anchor: 'right',
  size: 'medium',
  ModalProps: {},
  PaperProps: {},
  BackdropProps: {},
};

DashboardLayoutMainModal.propTypes = {
  anchor: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  container: PropTypes.instanceOf(Element),
  // Mui Modal props
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  ModalProps: PropTypes.shape({}),
  PaperProps: PropTypes.shape({}),
  BackdropProps: PropTypes.shape({}),
  onClose: PropTypes.func.isRequired,
};

export default DashboardLayoutMainModal;
