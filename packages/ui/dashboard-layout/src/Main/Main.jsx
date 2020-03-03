import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

import MainContext from './MainContext';

const useStyles = makeStyles(
  theme => ({
    root: {
      position: 'relative',
      flexGrow: 1,
      overflow: 'hidden',
      margin: theme.spacing(0, 4, 4, 4),
    },
  }),
  { name: 'DashboardLayoutMain' },
);

const ref = React.createRef();

const DashboardLayoutMain = ({ className, children }) => {
  const classes = useStyles();

  return (
    <MainContext.Provider
      value={{
        ref,
      }}
    >
      <main ref={ref} className={cn(classes.root, className)}>
        {children}
      </main>
    </MainContext.Provider>
  );
};

DashboardLayoutMain.defaultProps = {
  className: null,
};

DashboardLayoutMain.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardLayoutMain;
