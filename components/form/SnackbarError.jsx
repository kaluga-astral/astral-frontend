import PropTypes from 'prop-types';
import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Snackbar from '@material-ui/core/Snackbar';

class SnackbarError extends Component {
  state = {
    open: true,
  };

  handleCloseButtonClick = () => {
    this.setState({ open: false });
  };

  handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render = () => {
    const { message } = this.props;
    const { open } = this.state;

    return (
      <Snackbar
        open={open}
        message={message}
        autoHideDuration={10000}
        action={[
          <IconButton key="close" color="inherit" onClick={this.handleCloseButtonClick}>
            <SvgIcon viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </SvgIcon>
          </IconButton>,
        ]}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        onClose={this.handleSnackbarClose}
      />
    );
  };
}

SnackbarError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SnackbarError;
