import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';
import { FlexContainer } from '@astral-frontend/components';

import Aside from '../Aside';
import SidebarContext from './SidebarContext';

const useStyles = makeStyles(
  theme => ({
    root: {
      width: '70px',
      height: '100%',
      backgroundColor: theme.palette.background.paper,
      userSelect: 'none',
      transition: theme.transitions.create(['width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    expanded: {
      width: '260px',
    },
  }),
  { name: 'DashboardLayoutSidebar' },
);

const LOCALSTORAGE_KEY = '__DASHBOARD_LAYOUT_SIDEBAR__';

const DashboardLayoutSidebar = ({ className, children }) => {
  const classes = useStyles();
  const initialExpanded = React.useMemo(() => {
    return (
      JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? {
        expanded: true,
      }
    ).expanded;
  }, []);
  const [expanded, setExpanded] = React.useState(initialExpanded);
  const toggleExpanded = React.useCallback(() => {
    setExpanded(prevValue => !prevValue);
  }, []);

  React.useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({ expanded }));
  }, [expanded]);

  return (
    <SidebarContext.Provider value={{ expanded, toggleExpanded }}>
      <FlexContainer
        component={Aside}
        direction="column"
        className={cn(className, classes.root, {
          [classes.expanded]: expanded,
        })}
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
