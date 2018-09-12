import cn from 'classnames';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/ButtonBase';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { withStyles } from '@material-ui/core/styles';

import { MenuList } from '../../../../Menu';
import Avatar from '../../../../Avatar';
import Item from './Item';

class DashboardSidebarProfile extends Component {
  state = {
    showMenu: false,
  };

  handleTogglerButtonClick = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
    }));
  };

  handleClickAwayListenerClickAway = (event) => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({
      showMenu: false,
    });
  };

  render = () => {
    const {
      classes, className, children, avatarSrc, avatarAlt, userName, userRole,
    } = this.props;
    const { showMenu } = this.state;

    return (
      <div className={cn(classes.root, className)}>
        <Button
          className={cn(classes.toggler)}
          buttonRef={(node) => {
            this.anchorEl = node;
          }}
          onClick={this.handleTogglerButtonClick}
        >
          <Avatar className={classes.avatar} src={avatarSrc} onClick={this.onPopoverToggle}>
            {avatarAlt}
          </Avatar>
          <div className={classes.user}>
            <div className={classes.userName}>{userName}</div>
            <div className={classes.userRole}>{userRole}</div>
          </div>
        </Button>
        <Popper transition disablePortal open={showMenu} anchorEl={this.anchorEl}>
          {({ TransitionProps }) => (
            <Grow {...TransitionProps}>
              <Paper className={classes.popperPaper}>
                <ClickAwayListener onClickAway={this.handleClickAwayListenerClickAway}>
                  <MenuList>{children}</MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  };
}

DashboardSidebarProfile.Item = Item;

DashboardSidebarProfile.defaultProps = {
  className: null,
  avatarSrc: null,
  userRole: null,
};

DashboardSidebarProfile.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  avatarSrc: PropTypes.string,
  avatarAlt: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userRole: PropTypes.string,
};

export default withStyles(theme => ({
  root: {
    marginTop: 'auto',
    borderTop: '0.5px solid rgba(255, 255, 255, 0.5)',
  },
  toggler: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    padding: '20px',
    border: 0,
    background: 'inherit',
    cursor: 'pointer',
    '&:hover': {
      background: 'rgba(10, 144, 237, 0.02)',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  avatar: {
    width: '32px',
    height: '32px',
    marginRight: '15px',
    fontSize: 16,
    color: theme.palette.common.black,
    background: theme.palette.common.white,
  },
  user: {
    textAlign: 'left',
    color: theme.palette.common.white,
  },
  userName: {
    fontWeight: 500,
    fontSize: '16px',
  },
  userRole: {
    fontWeight: 300,
    fontSize: '14px',
  },
  popperPaper: {
    minWidth: '175px',
  },
}))(DashboardSidebarProfile);
