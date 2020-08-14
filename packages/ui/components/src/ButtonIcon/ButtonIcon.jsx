import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      margin: theme.spacing(0, 1),
    },
  }),
  { name: 'ButtonIcon' },
);

const ButtonIcon = ({ Icon, className }) => {
  const classes = useStyles();

  return <Icon className={cn(classes.root, className)} />;
};

ButtonIcon.defaultProps = {
  className: null,
};

ButtonIcon.propTypes = {
  Icon: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default ButtonIcon;
