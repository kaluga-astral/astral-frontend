import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { TableCell as MuiTableCell } from '@astral-frontend/core';
import { withStyles } from '@astral-frontend/styles';

import TableRowContext from './TableRowContext';

const TableRowActions = ({ classes, ...props }) => {
  const tableRowContext = React.useContext(TableRowContext);

  return (
    <MuiTableCell
      className={cn(classes.root, { [classes.visible]: tableRowContext.hovered })}
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
    padding: '0 !important',
    visibility: 'hidden',
    backgroundColor: theme.palette.action.hover,
  },
  visible: {
    visibility: 'visible',
  },
}))(TableRowActions);
