import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import TableCell from './TableCell';

const TableActionsCell = ({ classes, className, children }) => (
  <TableCell className={cn(classes.root, className)}>
    <div className={classes.wrapper}>{children}</div>
  </TableCell>
);

TableActionsCell.defaultProps = {
  className: null,
};

TableActionsCell.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  root: {},
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
})(TableActionsCell);
