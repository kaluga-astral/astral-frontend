import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';
import { FlexContainer } from '@astral-frontend/components';

import Aside from '../Aside';
import { __Context as LayoutContext } from '../Layout';
import SidebarContext from './Context';

const useStyles = makeStyles(
  theme => ({
    root: {
      width: '260px',
      height: '100%',
      backgroundColor: theme.palette.background.paper,
      userSelect: 'none',
      transition: theme.transitions.create(['width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    collapsed: {
      width: '70px',
      backgroundColor: theme.palette.background.paper,
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
    asideRef.current.addEventListener('transitionend', event => {
      event.stopPropagation();
      setIsTransitioning(false);
    });
  }, []);

  return (
    <SidebarContext.Provider value={{ isTransitioning, isSidebarOpen }}>
      <FlexContainer
        ref={asideRef}
        component={Aside}
        direction="column"
        className={cn(
          isSidebarOpen ? classes.root : classes.collapsed,
          className,
        )}
      >
        {children}
      </FlexContainer>
    </SidebarContext.Provider>
  );
};

DashboardLayoutSidebar.defaultProps = {
  className: null,
};

DashboardLayoutSidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardLayoutSidebar;
