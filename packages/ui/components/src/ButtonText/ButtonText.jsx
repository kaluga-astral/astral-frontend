import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      margin: theme.spacing(0, 1),
      color: props => {
        return props.color ? props.color(theme) : null;
      },
    },
  }),
  { name: 'ButtonText' },
);

const ButtonText = props => {
  const { text } = props;
  const classes = useStyles(props);

  return <div className={classes.root}>{text}</div>;
};

ButtonText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonText;
