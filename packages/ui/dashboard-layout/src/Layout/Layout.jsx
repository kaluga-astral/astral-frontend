import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

import DashboardLayoutContext from './Context';

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
  const [currentMainModalKey, setCurrentMainModalKey] = React.useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  return (
    <DashboardLayoutContext.Provider
      value={{
        currentMainModalKey,
        setCurrentMainModalKey,
        isSidebarOpen,
        setIsSidebarOpen,
      }}
    >
      <div className={cn(classes.root, className)}>{children}</div>
    </DashboardLayoutContext.Provider>
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
