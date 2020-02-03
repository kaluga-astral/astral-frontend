import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      margin: theme.spacing(0, 1),
    },
  }),
  { name: 'ButtonText' },
);

const ButtonText = ({ text }) => {
  const classes = useStyles();

  return <div className={classes.root}>{text}</div>;
};

ButtonText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonText;
