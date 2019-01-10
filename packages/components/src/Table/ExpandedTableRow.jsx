import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import cn from 'classnames';

import Row from './TableRow';

const ExpandedTableRow = ({ classes, className, children }) => (
  <Row className={cn(classes.row, className)}>
    {children}
  </Row>
);

ExpandedTableRow.defaultProps = {
  className: null,
};

ExpandedTableRow.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  row: {
    padding: 0,
    borderLeft: '3px solid #0a90ed', // FIXME: цвета в тему
    background: 'rgba(10, 144, 237, 0.02)',
  },
  cell: {
    padding: '25px',
  },
})(ExpandedTableRow);
