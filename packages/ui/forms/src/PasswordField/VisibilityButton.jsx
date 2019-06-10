import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';
import { VisibilityIcon, VisibilityOffIcon } from '@astral-frontend/icons';

const VisibilityButton = ({ isVisible, classes, onClick }) => (
  <button
    type="button"
    className={classes.root}
    onClick={onClick}
  >
    {isVisible ? (
      <VisibilityIcon className={classes.icon} />
    ) : (
      <VisibilityOffIcon className={classes.icon} />
    )}
  </button>
);

VisibilityButton.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  classes: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    border: 0,
    padding: 0,
    width: 20,
    cursor: 'pointer',
    background: 'inherit',
    color: theme.palette.grey[600],
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  icon: {
    width: '100%',
    height: '100%',
  },
}))(VisibilityButton);
