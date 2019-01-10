import React from 'react';
import MuiTableBody from '@material-ui/core/TableBody';
import { withStyles } from '@material-ui/core/styles';

import Placeholder from '../status/Placeholder';
import TableRow from './TableRow';
import TableCell from './TableCell';

const TableBodyStatus = withStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})(({ classes, children }) => (
  <MuiTableBody>
    <TableRow>
      <TableCell colSpan={1000}>
        <div className={classes.wrapper}>{children}</div>
      </TableCell>
    </TableRow>
  </MuiTableBody>
));

const TableBody = ({
  isFetching, data, error, renderRow, ...props
}) => {
  if (error || isFetching) {
    return (
      <TableBodyStatus>
        <Placeholder isFetching={isFetching} error={error} />
      </TableBodyStatus>
    );
  }

  if (data.length === 0) {
    return (
      <TableBodyStatus>
        <span>Ничего не найдено</span>
      </TableBodyStatus>
    );
  }

  return <MuiTableBody {...props}>{data.map(renderRow)}</MuiTableBody>;
};

export default withStyles({})(TableBody);
