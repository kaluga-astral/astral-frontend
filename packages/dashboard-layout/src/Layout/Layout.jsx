import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral/styles';

import { SidebarContextProvider } from '../Sidebar';

const useStyles = makeStyles(
  () => ({
    root: {
      display: 'flex',
      height: '100vh',
    },
  }),
  { name: 'DashboardLayout' },
);

const DashboardLayout = ({ className, children }) => {
  const classes = useStyles();

  return (
    <SidebarContextProvider>
      <div className={cn(classes.root, className)}>{children}</div>
    </SidebarContextProvider>
  );
};

DashboardLayout.defaultProps = {
  className: null,
};

DashboardLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
