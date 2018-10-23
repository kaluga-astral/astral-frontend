import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';
import ConfirmPopover from './ConfirmPopover';

class ConfirmPopoverContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.onReject = this.onReject.bind(this);
  }

  onConfirm() {
    this.setState({ anchorEl: null });
  }

  onReject() {
    this.setState({ anchorEl: null });
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({
      anchorEl: null,
    });
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button onClick={this.handleClick}>Open popover</Button>
        <ConfirmPopover
          onConfirm={this.onConfirm}
          onReject={this.onReject}
          anchorEl={this.anchorEl}
          onClose={this.handleClose}
          open={Boolean(anchorEl)}
        />
      </div>
    );
  }
}

storiesOf('popover', module).add('ConfirmPopover', () => <ConfirmPopoverContainer />);
