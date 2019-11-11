import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

import MainContext from './MainContext';

const useStyles = makeStyles(
  {
    root: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      overflow: 'hidden',
    },
  },
  { name: 'DashboardLayoutMain' },
);

const ref = React.createRef();

const DashboardLayoutMain = ({ className, children }) => {
  const classes = useStyles();
  const [{ MainModal }, setMainModal] = React.useState({ MainModal: null });
  const [mainModalOpen, setMainModalOpen] = React.useState(false);
  const [mainModalCloseHandler, setMainModalCloseHandler] = React.useState(false);
  const handleMainModalClose = React.useCallback(() => {
    mainModalCloseHandler.action();
  }, [mainModalCloseHandler]);

  return (
    <MainContext.Provider
      value={{
        ref,
        setMainModal,
        setMainModalOpen,
        setMainModalCloseHandler,
      }}
    >
      <main ref={ref} className={cn(classes.root, className)}>
        {children}
      </main>
      {MainModal && <MainModal open={mainModalOpen} onClose={handleMainModalClose} />}
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
