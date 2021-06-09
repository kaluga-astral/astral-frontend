import cn from 'classnames';
import React from 'react';
import { TableCell as MuiTableCell } from '@astral/core';
import { makeStyles } from '@astral/styles';

import { __Context as TableRowContext } from '../TableRow';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    right: 0,
    top: '1px',
    bottom: '2px',
    border: 'none',
    visibility: 'hidden',
  },
  visible: {
    visibility: 'visible',
  },
});

const TableRowActions = props => {
  const classes = useStyles(props);
  const { hovered: tableRowHovered } = React.useContext(TableRowContext);

  return (
    <MuiTableCell
      onClick={e => {
        e.stopPropagation();
      }}
      className={cn(classes.root, { [classes.visible]: tableRowHovered })}
      {...props}
    />
  );
};

TableRowActions.propTypes = {};

export default TableRowActions;
