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

TableTemplatedDataListSecondaryCell.defaultProps = {
  title: null,
};

TableTemplatedDataListSecondaryCell.propTypes = {
  title: PropTypes.string,
};

export default TableTemplatedDataListSecondaryCell;
