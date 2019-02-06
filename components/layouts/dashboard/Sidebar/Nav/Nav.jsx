import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const DashboardSidebarNav = ({
  classes, className, children, ...props
}) => (
  <nav className={cn(classes.root, className)} {...props}>
    <ul className={classes.list}>
      {children}
    </ul>
  </nav>
);

DashboardSidebarNav.defaultProps = {
  className: null,
};

DashboardSidebarNav.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  root: {
    flex: 1,
    padding: 0,
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  list: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
})(DashboardSidebarNav);
