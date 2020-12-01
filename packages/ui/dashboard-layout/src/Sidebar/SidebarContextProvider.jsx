import React from 'react';
import PropTypes from 'prop-types';

import SidebarContext from './SidebarContext';

const LOCALSTORAGE_KEY = '__DASHBOARD_LAYOUT_SIDEBAR__';

const SidebarContextProvider = ({ children, alwaysExpanded }) => {
  const initialExpanded = React.useMemo(() => {
    if (alwaysExpanded) {
      return true;
    }
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

SidebarContextProvider.defaultProps = {
  alwaysExpanded: false,
};

SidebarContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  alwaysExpanded: PropTypes.bool,
};

export default SidebarContextProvider;
