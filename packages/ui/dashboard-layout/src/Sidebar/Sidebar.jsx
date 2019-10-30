import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

import LayoutContext from '../LayoutContext';
import SidebarContext from '../SidebarContext';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      width: '260px',
      height: '100%',
      backgroundColor: theme.palette.background.paper,
      transition: theme.transitions.create(['width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    sidebar: {
      width: '70px',
      transition: theme.transitions.create(['width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  }),
  { name: 'DashboardLayoutSidebar' },
);

const asideRef = React.createRef();

const DashboardLayoutSidebar = ({ className, children }) => {
  const classes = useStyles();
  const { isSidebarOpen } = React.useContext(LayoutContext);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  React.useEffect(() => {
    asideRef.current.addEventListener('transitionend', (event) => {
      event.stopPropagation();
      setIsTransitioning(false);
    });
  }, []);

  return (
    <SidebarContext.Provider value={{ isTransitioning }}>
      <aside
        ref={asideRef}
        className={cn(classes.root, className, {
          [classes.sidebar]: !isSidebarOpen,
        })}
      >
        {children}
      </aside>
    </SidebarContext.Provider>
  );
};

DashboardLayoutSidebar.defaultProps = {
  className: null,
};

DashboardLayoutSidebar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardLayoutSidebar;
