import cn from 'classnames';
import pathToRegexp from 'path-to-regexp';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

class DashboardSidebarNav extends Component {
  state = { expandedItemId: null };

  setExpanded = (id) => {
    const { expandedItemId } = this.state;
    if (id === expandedItemId) {
      this.setState({
        expandedItemId: null,
      });
    } else {
      this.setState({
        expandedItemId: id,
      });
    }
  };

  checkPathname = (element) => {
    const { location } = this.props;

    return pathToRegexp(location.pathname).test(element.props.to);
  };

  isActive = (element, index) => {
    const { expandedItemId } = this.state;
    const { children } = element.props;

    return (
      index === expandedItemId
      || (React.Children.toArray(children).some(expandedChild => this.checkPathname(expandedChild))
        && expandedItemId === null)
    );
  };

  addExtraProps = (element, index) => React.cloneElement(element, {
    onNavItemClick: () => this.setExpanded(index),
    expanded: this.isActive(element, index) || undefined,
  });

  render = () => {
    const {
      classes, className, children, staticContext, match, history, location, ...props
    } = this.props;
    const childrenWithProps = React.Children
      .map(children, (child, index) => this.addExtraProps(child, index));

    return (
      <nav className={cn(classes.root, className)} {...props}>
        <ul className={classes.list}>{childrenWithProps}</ul>
      </nav>
    );
  };
}

DashboardSidebarNav.defaultProps = {
  className: null,
  staticContext: null,
};

DashboardSidebarNav.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  staticContext: PropTypes.shape({}),
};

export default withRouter(
  withStyles({
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
  })(DashboardSidebarNav),
);
