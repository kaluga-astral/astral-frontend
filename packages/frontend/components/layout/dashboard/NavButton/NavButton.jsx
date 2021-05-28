import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  () => ({
    root: {
      height: '64px',
      width: '274px',
      whiteSpace: 'nowrap',
      flexShrink: 0,
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
