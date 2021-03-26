import React from 'react';

import TableTemplatedDataListPrimaryCell from '../TableTemplatedDataListPrimaryCell';

const createPrimaryTableCell = getProps => data => {
  const { title, subTitle } = getProps(data);

  return (
    <TableTemplatedDataListPrimaryCell title={title} subTitle={subTitle} />
  );
};

export default createPrimaryTableCell;
