import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { TableCell as MuiTableCell } from '@astral-frontend/core';
import { withStyles } from '@astral-frontend/styles';

import { __Context as TableRowContext } from '../TableRow';

const TableRowActions = ({ classes, ...props }) => {
  const { hovered: tableRowHovered } = React.useContext(TableRowContext);

  return (
    <MuiTableCell
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={cn(classes.root, { [classes.visible]: tableRowHovered })}
      {...props}
    />
  );
};

TableRowActions.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    right: 0,
    top: '1px',
    bottom: '2px',
    border: 'none',
    visibility: 'hidden',
    backgroundColor: theme.palette.action.hover,
  },
  visible: {
    visibility: 'visible',
  },
}))(TableRowActions);
