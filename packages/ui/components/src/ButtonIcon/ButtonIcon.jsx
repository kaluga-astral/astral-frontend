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

const ButtonIcon = ({ Icon }) => {
  const classes = useStyles();

  return <Icon className={classes.root} />;
};

ButtonIcon.propTypes = {
  Icon: PropTypes.func.isRequired,
};

export default ButtonIcon;
