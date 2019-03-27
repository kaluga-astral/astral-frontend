import cn from 'classnames';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import DropdownContext from './DropdownContext';

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

  render = () => {
    const {
      classes,
      className,
      children,
      staticContext,
      ...props
    } = this.props;
    const { expandedItemId } = this.state;

    return (
      <nav className={cn(classes.root, className)} {...props}>
        <DropdownContext.Provider
          value={{ expandedItemId, onNavDropdownItemSelect: this.setExpanded }}
        >
          <ul className={classes.list}>{children}</ul>
        </DropdownContext.Provider>
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
