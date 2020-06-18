import PropTypes from 'prop-types';
import React from 'react';

import TableTemplatedDataListItemContext from './TableTemplatedDataListItemContext';

const TableTemplatedDataListItemContextProvider = ({ children }) => {
  const [rowActionsVisible, setRowActionsVisible] = React.useState(false);

  return (
    <TableTemplatedDataListItemContext.Provider
      value={{ rowActionsVisible, setRowActionsVisible }}
    >
      {children}
    </TableTemplatedDataListItemContext.Provider>
  );
};

TableTemplatedDataListItemContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableTemplatedDataListItemContextProvider;
