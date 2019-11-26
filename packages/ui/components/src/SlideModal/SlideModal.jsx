import React from 'react';
import PropTypes from 'prop-types';

import SlideModalDrawer from './SlideModalDrawer';
import SlideModalContext from './SlideModalContext';

const ESCAPE_KEY_CODE = 'Escape';

const SlideModal = ({ open, onClose, children, SlideProps, ...props }) => {
  const handleKeyDown = React.useCallback(event => {
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
    <SlideModalContext.Provider value={{ open, onClose }}>
      <SlideModalDrawer
        open={open}
        onClose={onClose}
        SlideProps={SlideProps}
        {...props}
      >
        {children}
      </SlideModalDrawer>
    </SlideModalContext.Provider>
  );
};

SlideModal.defaultProps = {
  children: null,
  SlideProps: {
    appear: true,
    mountOnEnter: true,
    unmountOnExit: true,
  },
};

SlideModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  SlideProps: PropTypes.shape(),
};

export default SlideModal;
