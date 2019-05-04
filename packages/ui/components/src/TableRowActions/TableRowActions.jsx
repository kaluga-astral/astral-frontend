import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

import { TableRowContext } from '../TableRow';

const TableRowActions = ({
  classes, className, children, ...props
}) => {
  const { hovered } = React.useContext(TableRowContext);

  if (!hovered) {
    return null;
  }

  return (
    <div className={cn(classes.root, className)} {...props}>
      {children}
    </div>
  );
};

TableRowActions.defaultProps = {
  children: null,
  className: null,
};

TableRowActions.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(() => ({
  root: {
    top: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
}))(TableRowActions);
