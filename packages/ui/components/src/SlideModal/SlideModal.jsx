import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@astral-frontend/styles';
import { Portal } from '@astral-frontend/core';

import Drawer from '../Drawer';

import SlideModalContext from './SlideModalContext';

const getContainerPosition = ({ contain }) => (contain ? 'absolute' : null);

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
      position: getContainerPosition,
      padding: '24px 24px 0',
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
      borderLeft: 'none',
    },
  };
});

const SlideModal = ({
  open,
  disablePortal,
  anchor,
  size,
  transitionDuration,
  onClose,
  containerRef,
  children,
  ...props
}) => {
  const [containerNode, setContainerNode] = useState(null);
  const [unmountChildren, setUnmountChildren] = useState(false);
  const drawerClasses = useDrawerStyles({ size, contain: Boolean(containerRef) });

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  // нужен перерендер для обновления ref контейнера
  useEffect(() => {
    if (containerRef) setContainerNode(containerRef.current);
  }, []);

  // unmountChildren - оптимизация содержимого drawer
  // unmountChildren (а не open) для того, чтобы children не пропадало раньше окончания анимации
  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown);

      setUnmountChildren(false);
    }

    if (!open) {
      document.removeEventListener('keydown', handleKeyDown);

      setTimeout(
        () => { setUnmountChildren(true); },
        transitionDuration + 100,
      );
    }
  }, [open]);

  return (
    <Portal disablePortal={disablePortal} container={containerNode}>
      <SlideModalContext.Provider value={{ open, onClose }}>
        <Drawer
          {...props}
          open={open}
          classes={drawerClasses}
          transitionDuration={transitionDuration}
          anchor={anchor}
          variant="persistent"
        >
          {!unmountChildren && children}
        </Drawer>
      </SlideModalContext.Provider>
    </Portal>
  );
};

SlideModal.defaultProps = {
  disablePortal: false,
  children: null,
  containerRef: null,
  transitionDuration: 400,
  anchor: 'right',
  size: 'medium',
};

SlideModal.propTypes = {
  disablePortal: PropTypes.bool,
  transitionDuration: PropTypes.number,
  anchor: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  // ref
  containerRef: PropTypes.shape(),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SlideModal;
