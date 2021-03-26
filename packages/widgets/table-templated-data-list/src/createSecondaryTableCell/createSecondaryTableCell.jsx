import React from 'react';

import TableTemplatedDataListSecondaryCell from '../TableTemplatedDataListSecondaryCell';

const createSecondaryTableCell = getProps => data => {
  const { title } = getProps(data);

  return <TableTemplatedDataListSecondaryCell title={title} />;
};

export default createSecondaryTableCell;
