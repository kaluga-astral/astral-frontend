import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      height: '100%',
      marginLeft: theme.spacing(4),
    },
    text: {
      fontWeight: theme.typography.fontWeightBold,
      marginRight: theme.spacing(2),
    },
  }),
  { name: 'ContentNavActionButton' },
);

const ContentNavActionButton = ({ className, text, Icon, ...props }) => {
  const classes = useStyles();

  return (
    <Button
      variant="regular"
      className={cn(classes.root, className)}
      {...props}
    >
      <span className={classes.text}>{text}</span>
      {Icon && <Icon className={classes.icon} />}
    </Button>
  );
};

ContentNavActionButton.defaultProps = {
  className: null,
  Icon: null,
};

ContentNavActionButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  Icon: PropTypes.func,
};

export default ContentNavActionButton;
