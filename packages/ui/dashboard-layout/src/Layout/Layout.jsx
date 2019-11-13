import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

import DashboardLayoutContext from './Context';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100vh',
  },
}));

const DashboardLayout = ({ className, children }) => {
  const classes = useStyles();
  const [currentMainModalKey, setCurrentMainModalKey] = React.useState(null);

  return (
    <DashboardLayoutContext.Provider
      value={{ currentMainModalKey, setCurrentMainModalKey }}
    >
      <div className={cn(classes.root, className)}>{children}</div>
    </DashboardLayoutContext.Provider>
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
