import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

import List from '../List';

const Table = ({
  classes, className, children, ...props
}) => (
  <List component="ol" disablePadding {...props} className={cn(classes.root, className)}>
    {children}
  </List>
);

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
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
}))(Table);
