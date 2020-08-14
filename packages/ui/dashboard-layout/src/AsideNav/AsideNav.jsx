import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { List } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      flexGrow: 1,
      padding: 0,
      overflowY: 'scroll',
      scrollbarWidth: 'none',
      '-ms-overflow-style': 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    list: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
  }),
  {
    name: 'DashboardLayoutAsideNav',
  },
);

const DashboardLayoutAsideNav = ({ className, children }) => {
  const classes = useStyles();

  return (
    <nav className={cn(classes.root, className)}>
      <List className={classes.list}>{children}</List>
    </nav>
  );
};

DashboardLayoutAsideNav.defaultProps = {
  className: null,
};

DashboardLayoutAsideNav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardLayoutAsideNav;
