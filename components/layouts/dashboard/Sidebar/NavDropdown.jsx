import PropTypes from 'prop-types';
import React, { Fragment, PureComponent } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import pathToRegexp from 'path-to-regexp';

import Collapse from '../../../Collapse';
import ListItemIcon from './ListItemIcon';
import ListItemText from './ListItemText';

class SidebarNavDropdown extends PureComponent {
  state = { expanded: undefined };

  componentDidMount = () => {
    this.setExpanded();
  };

  componentDidUpdate = (prevProps) => {
    const { location } = this.props;

    if (prevProps.location.pathname !== location.pathname) {
      this.setExpanded();
    }
  };

  setExpanded = () => {
    const { children, location } = this.props;
    // prettier-ignore
    const expanded = React
      .Children
      .toArray(children)
      .some(dropdownItem => pathToRegexp(location.pathname).test(dropdownItem.props.to));

    this.setState({
      expanded,
    });
  };

  toggleExpanded = () => {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  };

  render = () => {
    const { expanded } = this.state;
    const {
      classes, icon: Icon, text, children,
    } = this.props;

    return (
      <Fragment>
        <MenuItem selected={expanded} className={classes.mainNavItem} onClick={this.toggleExpanded}>
          {Icon && (
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
          )}
          <ListItemText primary={text} />
          <svg width="10" height="5" viewBox="0 0 10 5">
            <path
              d="M0 0L5 5L10 0H0Z"
              transform={expanded ? 'translate(0 5) scale(1 -1)' : null}
              fill="white"
            />
          </svg>
        </MenuItem>
        <Collapse in={expanded}>
          <MenuList className={classes.list}>{children}</MenuList>
        </Collapse>
      </Fragment>
    );
  };
}

SidebarNavDropdown.propTypes = {
  classes: PropTypes.shape().isRequired,
  icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles({
  mainNavItem: {
    padding: '15px 25px',
    fontSize: '20px',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  list: {
    background: '#0065B1', // FIXME: вынести цвета в тему
  },
})(withRouter(SidebarNavDropdown));
