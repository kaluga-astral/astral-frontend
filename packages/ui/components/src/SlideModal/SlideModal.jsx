import PropTypes from 'prop-types';
import React from 'react';

import { SlideModalDrawer } from './SlideModalDrawer';
import { SlideModalContext } from './SlideModalContext';

const ESCAPE_KEY_CODE = 'Escape';

export const SlideModal = React.forwardRef(
  ({ open, title, children, goBackURL, onClose, ...props }, ref) => {
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
      <SlideModalContext.Provider value={{ open, close: onClose, goBackURL }}>
        <SlideModalDrawer open={open} onClose={onClose} {...props} ref={ref}>
          {children}
        </SlideModalDrawer>
      </SlideModalContext.Provider>
    );
  },
);

SlideModal.defaultProps = {
  title: null,
  goBackURL: null,
};

SlideModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  goBackURL: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SlideModal;
