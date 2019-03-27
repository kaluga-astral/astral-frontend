import { uniqueId } from 'lodash-es';
import pathToRegexp from 'path-to-regexp';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Collapse from '@material-ui/core/Collapse';
import { withStyles } from '@material-ui/core/styles';

import ButtonBase from '../../../../ButtonBase';
import NavItemIcon from './NavItemIcon';
import NavItemText from './NavItemText';
import DropdownContext from './DropdownContext';

class DashboardSidebarNavDropdown extends Component {
  static contextType = DropdownContext;

  state = {
    id: null,
  };

  componentDidMount = () => {
    const { children, location } = this.props;
    const { onNavDropdownItemSelect } = this.context;
    const id = uniqueId();
    this.setState({ id });
    if (
      React.Children.toArray(children)
        .some(child => child && pathToRegexp(location.pathname).test(child.props.to))
    ) {
      onNavDropdownItemSelect(id);
    }
  };

  render = () => {
    const {
      hasNotification, classes, icon, text, children,
    } = this.props;
    const { id } = this.state;
    const { expandedItemId, onNavDropdownItemSelect } = this.context;
    return (
      <li className={classes.root}>
        <ButtonBase
          className={cn(classes.toggler, {
            [classes.expanded]: expandedItemId === id,
          })}
          onClick={() => onNavDropdownItemSelect(id)}
        >
          {icon && <NavItemIcon hasNotification={hasNotification} icon={icon} />}
          <NavItemText>{text}</NavItemText>
          <svg
            className={cn(classes.togglerIcon)}
            style={{
              transform: expandedItemId === id ? 'rotateZ(180deg)' : null,
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
        <Collapse in={expandedItemId === id}>
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
  location: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
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
