import React from 'react';

import SidebarToggler from '../SidebarToggler';

// TODO: Remove in v1
const AsideNavItemToggleButton = props => {
  React.useEffect(() => {
    console.error(
      'Component `AsideNavItemToggleButton` are deprecated, use `SidebarToggler` insted.',
    );
  }, []);

  return <SidebarToggler {...props} />;
};

export default AsideNavItemToggleButton;
