import PropTypes from 'prop-types';
import React from 'react';
import { IconButton } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';
import { VisibilityIcon, VisibilityOffIcon } from '@astral-frontend/icons';

const useStyles = makeStyles({
  icon: {
    width: '100%',
    height: '100%',
  },
});

const VisibilityButton = ({ isVisible, onClick }) => {
  const classes = useStyles();

  return (
    <IconButton size="small" onClick={onClick}>
      {isVisible ? (
        <VisibilityIcon className={classes.icon} />
      ) : (
        <VisibilityOffIcon className={classes.icon} />
      )}
    </IconButton>
  );
};

VisibilityButton.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default VisibilityButton;
