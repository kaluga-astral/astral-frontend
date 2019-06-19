import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const ButtonContent = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};

ButtonContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonContent;
