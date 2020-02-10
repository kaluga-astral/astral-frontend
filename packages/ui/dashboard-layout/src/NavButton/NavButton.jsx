import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Button } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      height: '100%',
      width: '274px',
      marginLeft: theme.spacing(4),
    },
  }),
  { name: 'NavButton' },
);

const NavButton = ({ className, ...props }) => {
  const classes = useStyles();

  return (
    <Button
      variant="regular"
      {...props}
      className={cn(classes.root, className)}
    />
  );
};

NavButton.defaultProps = {
  className: null,
};

NavButton.propTypes = {
  className: PropTypes.string,
};

export default NavButton;
