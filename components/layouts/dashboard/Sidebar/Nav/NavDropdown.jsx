import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Collapse from '@material-ui/core/Collapse';
import { withStyles } from '@material-ui/core/styles';

import ButtonBase from '../../../../ButtonBase';
import NavItemIcon from './NavItemIcon';
import NavItemText from './NavItemText';

const DashboardSidebarNavDropdown = ({
  hasNotification,
  classes,
  icon,
  text,
  children,
  onNavItemClick,
  expanded,
}) => (
  <li className={classes.root}>
    <ButtonBase
      className={cn(classes.toggler, { [classes.expanded]: expanded })}
      onClick={onNavItemClick}
    >
      {icon && <NavItemIcon hasNotification={hasNotification} icon={icon} />}
      <NavItemText>{text}</NavItemText>
      <svg
        className={cn(classes.togglerIcon)}
        style={{
          transform: expanded ? 'rotateZ(180deg)' : null,
        }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        <path fill="none" d="M0 0h24v24H0z" />
      </svg>
    </ButtonBase>
    <Collapse in={expanded}>
      <ul className={classes.list}>{children}</ul>
    </Collapse>
  </li>
);

DashboardSidebarNavDropdown.defaultProps = {
  hasNotification: false,
  expanded: false,
};

DashboardSidebarNavDropdown.propTypes = {
  hasNotification: PropTypes.bool,
  expanded: PropTypes.bool,
  classes: PropTypes.shape().isRequired,
  icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onNavItemClick: PropTypes.func.isRequired,
};

export default withRouter(
  withStyles(theme => ({
    root: {},
    toggler: {
      width: '100%',
      justifyContent: 'flex-start',
      padding: '15px 20px',
      lineHeight: '20px',
      fontSize: '16px',
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.common.white,
      '&:hover': {
        background: theme.palette.action.hover,
      },
      '&$expanded': {
        backgroundColor: theme.palette.action.selected,
      },
    },
    expanded: {},
    togglerIcon: {
      flexShrink: 0,
      marginLeft: '5px',
      transition: 'all 0.5s ease 0s',
    },
    list: {
      padding: 0,
      margin: 0,
      listStyle: 'none',
      backgroundColor: 'rgba(0, 0, 0, 0.14)',
      borderBottom: '0.5px solid rgba(255, 255, 255, 0.5)',
    },
  }))(DashboardSidebarNavDropdown),
);
