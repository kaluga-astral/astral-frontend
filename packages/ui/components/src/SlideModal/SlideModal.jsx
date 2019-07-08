import React from 'react';
import PropTypes from 'prop-types';

import { Portal } from '@astral-frontend/core';

import SlideModalDrawer from './SlideModalDrawer';
import SlideModalContext from './SlideModalContext';

const ESCAPE_KEY_CODE = 'Escape';

const SlideModal = ({
  open, disablePortal, onClose, containerRef, children, ...props
}) => {
  const handleKeyDown = React.useCallback((event) => {
    if (event.key === ESCAPE_KEY_CODE) {
      onClose();
    }
  }, []);

  React.useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [open]);

  return (
    <Portal disablePortal={disablePortal} container={containerRef.current}>
      <SlideModalContext.Provider value={{ open, onClose }}>
        <SlideModalDrawer open={open} contain={disablePortal} {...props}>
          {children}
        </SlideModalDrawer>
      </SlideModalContext.Provider>
    </Portal>
  );
};

SlideModal.defaultProps = {
  disablePortal: false,
  children: null,
  containerRef: null,
};

SlideModal.propTypes = {
  disablePortal: PropTypes.bool,
  containerRef: PropTypes.shape(),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SlideModal;
