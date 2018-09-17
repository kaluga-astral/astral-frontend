import React from 'react';
import MuiTableBody from '@material-ui/core/TableBody';
import { withStyles } from '@material-ui/core/styles';

import Loader from '../status/Loader';
import TableRow from './TableRow';
import TableCell from './TableCell';

const TableBodyLoading = withStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '25px',
  },
})(({ classes }) => (
  <MuiTableBody>
    <TableRow>
      <TableCell colSpan={1000}>
        <div className={classes.wrapper}>
          <Loader />
        </div>
      </TableCell>
    </TableRow>
  </MuiTableBody>
));

const TableBody = ({ isFetching, ...props }) => {
  if (isFetching) {
    return <TableBodyLoading />;
  }

  return <MuiTableBody {...props} />;
};

export default withStyles({})(TableBody);
