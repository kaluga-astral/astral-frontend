import React from 'react';
import PropTypes from 'prop-types';

import AsideContext from './AsideContext';

const AsideContextProvider = ({ children }) => {
  const [expandedNavDropdownId, setExpandedNavDropdownId] = React.useState();

  return (
    <AsideContext.Provider
      value={{ expandedNavDropdownId, setExpandedNavDropdownId }}
    >
      {children}
    </AsideContext.Provider>
  );
};

AsideContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AsideContextProvider;
