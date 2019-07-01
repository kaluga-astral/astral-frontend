import PropTypes from 'prop-types';
import React from 'react';
import { Drawer, ClickAwayListener } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import MainModalContext from './MainModalContext';

const getContainerPosition = ({ container }) => (container ? 'absolute' : null);

const useDrawerStyles = makeStyles(() => {
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
      position: getContainerPosition,
    },
    modal: {
      position: props => `${getContainerPosition(props)} !important`,
    },
  };
});

const useBackdropStyles = makeStyles(() => ({
  root: {
    position: getContainerPosition,
    backgroundColor: 'transparent',
  },
}));

const DashboardLayoutMainModal = ({
  anchor,
  size,
  ModalProps,
  BackdropProps,
  onClose,
  container,
  children,
  ...props
}) => {
  const drawerClasses = useDrawerStyles({ size, container });
  const backdropClasses = useBackdropStyles({ container });

  // ClickAwayListener нужен когда модалка находится не на уровне body
  return (
    <MainModalContext.Provider value={{ onClose }}>
      <ClickAwayListener onClickAway={onClose}>
        <Drawer
          {...props}
          classes={drawerClasses}
          transitionDuration={400}
          ModalProps={{
            disablePortal: Boolean(container),
            onBackdropClick: onClose,
            onEscapeKeyDown: onClose,
            container,
            ...ModalProps,
          }}
          BackdropProps={{
            classes: backdropClasses,
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
