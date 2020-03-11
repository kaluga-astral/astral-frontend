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
      width: '260px',
      height: '100%',
      backgroundColor: theme.palette.background.paper,
      userSelect: 'none',
      transition: theme.transitions.create(['width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    expanded: {
      width: '70px',
    },
  }),
  { name: 'DashboardLayoutSidebar' },
);

const asideRef = React.createRef();
const LOCALSTORAGE_KEY = 'SIDEBAR_EXPANDED';

const DashboardLayoutSidebar = ({ className, children }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(
    localStorage.getItem(LOCALSTORAGE_KEY) ?? false,
  );
  const toggleExpanded = React.useCallback(() => {
    setExpanded(prevValue => !prevValue);
  }, []);

  React.useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, expanded);
  }, [expanded]);

  return (
    <SidebarContext.Provider value={{ expanded, toggleExpanded }}>
      <FlexContainer
        ref={asideRef}
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
