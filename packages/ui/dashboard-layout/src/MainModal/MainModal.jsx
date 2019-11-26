import PropTypes from 'prop-types';
import React from 'react';
import { SlideModal } from '@astral-frontend/components';

const DashboardLayoutMainModal = ({ children, ...props }) => (
  <SlideModal {...props}>{children}</SlideModal>
);

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
