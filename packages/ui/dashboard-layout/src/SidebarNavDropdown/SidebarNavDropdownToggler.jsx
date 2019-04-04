import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBase } from '@astral-frontend/components';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutSidebarNavDropdownToggler = ({
  classes,
  className,
  // activeClassName,
  children,
  onToggle,
}) => (
  <ButtonBase
    className={cn(classes.root, className, {
      // [activeClassName]: expanded,
    })}
    onClick={onToggle}
  >
    {children}
    <svg
      className={classes.expandIcon}
      viewBox="0 0 24 24"
      // style={{
      //   transform: expanded ? 'rotateZ(90deg)' : null,
      // }}
    >
      <path d="M8.295 7.70503L12.875 12.295L8.295 16.885L9.705 18.295L15.705 12.295L9.705 6.29503L8.295 7.70503Z" />
    </svg>
  </ButtonBase>
);

DashboardLayoutSidebarNavDropdownToggler.defaultProps = {
  className: null,
  // activeClassName: null,
};

DashboardLayoutSidebarNavDropdownToggler.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  // activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default withStyles(
  () => ({
    root: {},
    // content: {
    //   display: 'flex',
    //   flexGrow: 1,
    //   marginRight: '10px',
    // },
    expandIcon: {
      flexShrink: 0,
      width: '20px',
      height: '20px',
      fill: 'currentColor',
      transition: 'transform 0.3s ease 0s',
    },
  }),
  { name: 'DashboardLayoutSidebarNavDropdownToggler' },
)(DashboardLayoutSidebarNavDropdownToggler);
