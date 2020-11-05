import React from 'react';
import PropTypes from 'prop-types';

import SidebarContext from './SidebarContext';

const LOCALSTORAGE_KEY = '__DASHBOARD_LAYOUT_SIDEBAR__';

const SidebarContextProvider = ({ children }) => {
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
      {children}
    </SidebarContext.Provider>
  );
};

SidebarContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarContextProvider;
