import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    opacity: ({ loading }) => (loading ? 0 : 1),
  },
}));

const ButtonContent = ({ loading, children }) => {
  const classes = useStyles({ loading });

  return <div className={classes.root}>{children}</div>;
};

ButtonContent.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonContent;
