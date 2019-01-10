import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Logo from './Logo';
import Title from './Title';

const DashboardSidebarProduct = ({ classes, className, children }) => (
  <div className={cn(classes.root, className)}>{children}</div>
);

DashboardSidebarProduct.defaultProps = {
  className: null,
};

DashboardSidebarProduct.propTypes = {
  classes: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

DashboardSidebarProduct.Logo = Logo;
DashboardSidebarProduct.Title = Title;

export default withStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: '70px',
    padding: '0 20px',
    borderBottom: '0.5px solid rgba(255, 255, 255, 0.5)',
  },
})(DashboardSidebarProduct);
