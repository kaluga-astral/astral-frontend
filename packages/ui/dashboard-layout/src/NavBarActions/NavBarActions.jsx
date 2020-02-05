import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { FlexContainer } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      height: '100%',
      marginLeft: 'auto',
      paddingLeft: theme.spacing(4),
      borderLeft: `1px solid ${theme.palette.primary.light}`,
    },
  }),
  { name: 'NavBarActions' },
);

const NavBarActions = ({ className, children }) => {
  const classes = useStyles();

  return (
    <FlexContainer alignItems="center" className={cn(classes.root, className)}>
      {children}
    </FlexContainer>
  );
};

NavBarActions.defaultProps = {
  className: null,
};

NavBarActions.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default NavBarActions;
