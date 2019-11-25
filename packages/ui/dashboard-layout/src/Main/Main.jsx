import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

import MainContext from './MainContext';

const useStyles = makeStyles(
  theme => ({
    root: {
      position: 'relative',
      // display: 'flex',
      // flexDirection: 'column',
      flexGrow: 1,
      overflow: 'hidden',
      margin: `${theme.spacing(4)}px`,
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
