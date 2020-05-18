import PropTypes from 'prop-types';
import React from 'react';

import { SlideModalTitle } from './SlideModalTitle';
import { SlideModalDrawer } from './SlideModalDrawer';
import { SlideModalContext } from './SlideModalContext';

const ESCAPE_KEY_CODE = 'Escape';

const SlideModal = ({ open, title, children, onClose, ...props }) => {
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
    <SlideModalContext.Provider value={{ open, close: onClose }}>
      <SlideModalDrawer open={open} onClose={onClose} {...props}>
        {title && <SlideModalTitle title={title} />}
        {children}
      </SlideModalDrawer>
    </SlideModalContext.Provider>
  );
};

SlideModal.defaultProps = {
  title: null,
};

SlideModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SlideModal;
