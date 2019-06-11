import React from 'react';

const SidebarNavDropdownContext = React.createContext({
  expandedItemId: null,
  onNavDropdownItemSelect: null,
});

export default SidebarNavDropdownContext;
