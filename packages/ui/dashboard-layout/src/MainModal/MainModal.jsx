import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { SlideModal } from '@astral-frontend/components';

import { __Context as MainContext } from '../Main';

const DashboardLayoutMainModal = ({
  children,
  ...props
}) => {
  const { ref: mainRef } = useContext(MainContext);
  const containerRef = mainRef && mainRef.current ? mainRef : null;

  return (
    <SlideModal {...props} containerRef={containerRef}>
      {children}
    </SlideModal>
  );
};

DashboardLayoutMainModal.defaultProps = {
  children: null,
  anchor: 'right',
  size: 'medium',
};

DashboardLayoutMainModal.propTypes = {
  anchor: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DashboardLayoutMainModal;
