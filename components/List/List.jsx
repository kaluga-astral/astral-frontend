import MuiList from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';

import React from 'react';

const TableBodyNotMatchStatus = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  },
})(({ classes }) => <div className={classes.root}>Ничего не найдено</div>);

const List = ({ data, renderItem, ...props }) => (
  <MuiList {...props}>
    {data.length === 0 && <TableBodyNotMatchStatus />}
    {data.map(renderItem)}
  </MuiList>
);

export default withStyles({})(List);
