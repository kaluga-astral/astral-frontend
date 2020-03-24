import React from 'react';

import AsideToggler from '../AsideToggler';

// TODO: Remove in v1
const AsideNavItemToggleButton = props => {
  React.useEffect(() => {
    console.error(
      'Component `AsideNavItemToggleButton` are deprecated, use `AsideToggler` insted.',
    );
  }, []);

  return <AsideToggler {...props} />;
};

export default AsideNavItemToggleButton;
