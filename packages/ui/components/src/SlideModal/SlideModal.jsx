import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import SlideModalDrawer from './SlideModalDrawer';
import SlideModalContext from './SlideModalContext';

const ESCAPE_KEY_CODE = 'Escape';

const SlideModal = ({
  open,
  disablePortal,
  onClose,
  containerRef,
  children,
  appear,
  mountOnEnter,
  unmountOnExit,
  ...props
}) => {
  const portalContent = (
    <SlideModalContext.Provider value={{ open, onClose }}>
      <SlideModalDrawer
        open={open}
        contain={!disablePortal}
        SlideProps={{ mountOnEnter, unmountOnExit, appear }}
        {...props}
      >
        {children}
      </SlideModalDrawer>
    </SlideModalContext.Provider>
  );
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

  return containerRef ? ReactDOM.createPortal(portalContent, containerRef.current) : portalContent;
};

SlideModal.defaultProps = {
  disablePortal: false,
  children: null,
  containerRef: null,
  appear: true,
  mountOnEnter: true,
  unmountOnExit: true,
};

SlideModal.propTypes = {
  disablePortal: PropTypes.bool,
  containerRef: PropTypes.shape(),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  appear: PropTypes.bool,
  mountOnEnter: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
};

export default SlideModal;
