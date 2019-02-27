import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Snackbar from '../Snackbar';

class NotificationsProvider extends Component {
  state = {
    open: false,
    notification: {},
  };

  notifications = [];

  componentDidMount = () => {
    const { notificationsObserver } = this.props;

    notificationsObserver((notifications) => {
      this.notifications.push(...Object.values(notifications));
    });
  };

  handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render = () => {
    const { children } = this.props;
    const { open, notification } = this.state;

    return (
      <>
        {children}
        <Snackbar
          open={open}
          autoHideDuration={notification.timeout}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          onClose={this.handleSnackbarClose}
        />
      </>
    );
  };
}

NotificationsProvider.propTypes = {
  notificationsObserver: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default NotificationsProvider;
