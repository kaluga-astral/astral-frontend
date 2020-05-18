import cn from 'classnames';
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

const ButtonText = ({ className, ...props }) => {
  const { text } = props;
  const classes = useStyles(props);

  return <div className={cn(className, classes.root)}>{text}</div>;
};

ButtonText.defaultProps = {
  className: null,
};

ButtonText.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default ButtonText;
