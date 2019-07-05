import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@astral-frontend/styles';

import Drawer from '../Drawer';
import SlideModalTitle from './SlideModalTitle';
import SlideModalContent from './SlideModalContent';
import SlideModalFooter from './SlideModalFooter';

import SlideModalContext from './SlideModalContext';

const getContainerPosition = ({ container }) => (container ? 'absolute' : 'fixed');

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
  };
});

const SlideModal = ({
  anchor,
  size,
  onClose,
  container,
  children,
  ...props
}) => {
  const drawerClasses = useDrawerStyles({ size, container });

  console.log('container', container);
  return createPortal(
    <div>
      <SlideModalContext.Provider value={{ onClose }}>
        <Drawer
          {...props}
          classes={drawerClasses}
          transitionDuration={400}
          anchor={anchor}
          variant="persistent"
        >
          {children}
        </Drawer>
      </SlideModalContext.Provider>
    </div>,
    container,
  );
};

SlideModal.defaultProps = {
  children: null,
  container: null,
  anchor: 'right',
  size: 'medium',
};

SlideModal.propTypes = {
  anchor: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  container: PropTypes.instanceOf(Element),
  // Mui Modal props
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClose: PropTypes.func.isRequired,
};

SlideModal.Title = SlideModalTitle;
SlideModal.Content = SlideModalContent;
SlideModal.Footer = SlideModalFooter;

export default SlideModal;
