import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

import LayoutContext from '../LayoutContext';

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
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  return (
    <LayoutContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      <div className={cn(classes.root, className)}>{children}</div>
    </LayoutContext.Provider>
  );
};

DashboardLayout.defaultProps = {
  className: null,
};

DashboardLayout.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
