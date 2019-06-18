import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

import MainContext from './MainContext';

const ref = React.createRef();

const DashboardLayoutMain = ({ classes, className, children }) => (
  <MainContext.Provider value={{ ref }}>
    <main ref={ref} className={cn(classes.root, className)}>
      {children}
    </main>
  </MainContext.Provider>
);

DashboardLayoutMain.defaultProps = {
  className: null,
};

DashboardLayoutMain.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles(
  () => ({
    root: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      overflow: 'hidden',
    },
  }),
  { name: 'DashboardLayoutMain' },
)(DashboardLayoutMain);
