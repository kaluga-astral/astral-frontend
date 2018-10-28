import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';

import ConfirmPopper from './ConfirmPopper';
import Button from './Button';

class PopperContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      open: false,
    };

    this.onClick = ({ currentTarget }) => this.setState(state => ({ anchorEl: currentTarget, open: !state.open }));

    this.onConfirm = () => this.setState(state => ({ anchorEl: null, open: !state.open }));

    this.onReject = () => this.setState(state => ({ anchorEl: null, open: !state.open }));
  }

  render() {
    const { open, anchorEl } = this.state;

    return (
      <div>
        <Button onClick={this.onClick}>Open popper</Button>
        <ConfirmPopper
          open={open}
          anchorEl={anchorEl}
          onConfirm={this.onConfirm}
          onReject={this.onReject}
        />
      </div>
    );
  }
}

storiesOf('Popper', module).add('ConfirmPopper', () => <PopperContainer />);
