import PropTypes from 'prop-types';
import React from 'react';
import { IconButton } from '@astral-frontend/components';
import { VisibilityIcon, VisibilityOffIcon } from '@astral-frontend/icons';

const VisibilityButton = ({ isVisible, onClick }) => {
  return (
    <IconButton size="small" onClick={onClick}>
      {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
    </IconButton>
  );
};

VisibilityButton.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default VisibilityButton;
