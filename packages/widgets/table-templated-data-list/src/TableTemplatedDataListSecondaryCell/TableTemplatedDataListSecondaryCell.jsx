import PropTypes from 'prop-types';
import React from 'react';

import { DataListItemContext } from '@astral-frontend/data-list';

const TableTemplatedDataListSecondaryCell = ({ title }) => {
  const { loading } = React.useContext(DataListItemContext);

  const Children = () => {
    if (loading) {
      return 'Loading...';
    }

    return title;
  };

  return (
    <div>
      <Children />
    </div>
  );
};

TableTemplatedDataListSecondaryCell.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TableTemplatedDataListSecondaryCell;
