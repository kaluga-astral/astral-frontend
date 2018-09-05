import cn from 'classnames';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/ButtonBase';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { withStyles } from '@material-ui/core/styles';

import Avatar from '../../../../Avatar';

class HeaderProfile extends Component {
  state = {
    showMenu: false,
  };

  handleTogglerButtonClick = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
    }));
  };

  handleTogglerButtonBlur = (e) => {
    if (e && e.relatedTarget) {
      e.relatedTarget.click();
    }
    this.setState({
      showMenu: false,
    });
  };

  handleClickAwayListenerClickAway = (event) => {
    if (this.toggler.contains(event.target)) {
      return;
    }

    this.setState({
      showMenu: false,
    });
  };

  render = () => {
    const {
      classes, className, avatarSrc, avatarAlt, userName, children,
    } = this.props;
    const { showMenu } = this.state;

    return (
      <div className={cn(classes.root, className)}>
        <Button
          className={cn(classes.toggler)}
          buttonRef={(node) => {
            this.toggler = node;
          }}
          onClick={this.handleTogglerButtonClick}
          onBlur={this.handleTogglerButtonBlur}
        >
          <span className={classes.userName}>{userName}</span>
          <Avatar src={avatarSrc} onClick={this.onPopoverToggle}>
            {avatarAlt}
          </Avatar>
        </Button>
        <Popper
          transition
          disablePortal
          open={showMenu}
          anchorEl={this.toggler}
        >
          {({ TransitionProps }) => (
            <Grow {...TransitionProps}>
              <Paper>
                <ClickAwayListener onClickAway={this.handleClickAwayListenerClickAway}>
                  {children}
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  };
}

HeaderProfile.defaultProps = {
  className: null,
  avatarSrc: null,
};

HeaderProfile.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  avatarSrc: PropTypes.string,
  avatarAlt: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  root: {
    margin: '0 12.5px',
    height: '60px',
    '&:first-child': {
      marginLeft: '25px',
    },
    '&:last-child': {
      marginRight: '25px',
    },
  },
  toggler: {
    display: 'flex',
    alignItems: 'center',
    height: '60px',
    border: 'none',
    padding: '0 20px',
    background: 'inherit',
    cursor: 'pointer',
    '&:hover': {
      background: 'rgba(10, 144, 237, 0.02)', // FIXME: цвета в тему
    },
    '&:focus': {
      outline: 'none',
    },
  },
  avatar: {
    width: 40,
    borderRadius: '50%',
    marginLeft: 10,
    cursor: 'pointer',
  },
  userName: {
    maxWidth: '300px',
    marginRight: '15px',
    whiteSpace: 'nowrap',
    fontSize: 16,
    fontWeight: 300,
    color: '#0071C5', // FIXME: цвет в константы
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
})(HeaderProfile);
