import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBase } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  () => ({
    root: {},
    content: {
      display: 'flex',
      flexGrow: 1,
      marginRight: '10px',
    },
    expandIcon: {
      flexShrink: 0,
      width: '20px',
      height: '20px',
      fill: 'currentColor',
      transition: 'transform 0.3s ease 0s',
    },
  }),
  {
    name: 'DashboardLayoutSidebarNavDropdownToggler',
  },
);

const DashboardLayoutSidebarNavDropdownToggler = ({
  className, expanded, children, onToggle,
}) => {
  const classes = useStyles();

  return (
    <ButtonBase className={cn(classes.root, className)} onClick={onToggle}>
      {children}
      <svg
        className={classes.expandIcon}
        viewBox="0 0 24 24"
        style={{
          transform: expanded ? 'rotateZ(90deg)' : null,
        }}
      >
        <path d="M8.295 7.70503L12.875 12.295L8.295 16.885L9.705 18.295L15.705 12.295L9.705 6.29503L8.295 7.70503Z" />
      </svg>
    </ButtonBase>
  );
};

DashboardLayoutSidebarNavDropdownToggler.defaultProps = {
  className: null,
};

DashboardLayoutSidebarNavDropdownToggler.propTypes = {
  className: PropTypes.string,
  expanded: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default DashboardLayoutSidebarNavDropdownToggler;
