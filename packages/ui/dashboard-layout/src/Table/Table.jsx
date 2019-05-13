import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

import Header from './TableHeader';
import Body from './TableBody';
import Row from './TableRow';
import Cell from './TableCell';
import Footer from './TableFooter';

const Table = ({
  classes, className, children, ...props
}) => (
  <div {...props} className={cn(classes.root, className)}>
    {children}
  </div>
);

Table.Header = Header;
Table.Footer = Footer;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;

Table.defaultProps = {
  children: null,
  className: null,
};

Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },
}))(Table);
