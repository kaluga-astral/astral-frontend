import cn from 'classnames';
import pathToRegexp from 'path-to-regexp';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Collapse from '@material-ui/core/Collapse';
import { withStyles } from '@material-ui/core/styles';

import ButtonBase from '../../../../ButtonBase';
import NavItemIcon from './NavItemIcon';
import NavItemText from './NavItemText';

class DashboardSidebarNavDropdown extends Component {
  state = { expanded: undefined };

  componentDidMount = () => {
    this.setExpanded();
  };

  componentDidUpdate = (prevProps) => {
    const { location, children } = this.props;

    if (prevProps.location.pathname !== location.pathname) {
      this.setExpanded();
    }
    if (React.Children.count(prevProps.children) !== React.Children.count(children)) {
      this.setExpanded();
    }
  };

  setExpanded = () => {
    const { children, location } = this.props;
    const isActive = dropdownItem => pathToRegexp(location.pathname).test(dropdownItem.props.to);

    this.setState({
      expanded: React.Children.toArray(children).some(isActive),
    });
  };

  toggleExpanded = () => {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  };

  handleTogglerClick = () => {
    this.toggleExpanded();
  };

  handleDropdownBlur = () => {
    console.log('handleBlur');
  };

  render = () => {
    const { expanded } = this.state;
    const {
      hasNotification, classes, icon, text, children,
    } = this.props;

    return (
      <li className={classes.root} onBlur={this.handleDropdownBlur}>
        <ButtonBase
          className={cn(classes.toggler, { [classes.expanded]: expanded })}
          onClick={this.handleTogglerClick}
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
  };
}

DashboardSidebarNavDropdown.defaultProps = {
  hasNotification: false,
};

DashboardSidebarNavDropdown.propTypes = {
  hasNotification: PropTypes.bool,
  classes: PropTypes.shape().isRequired,
  icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
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
