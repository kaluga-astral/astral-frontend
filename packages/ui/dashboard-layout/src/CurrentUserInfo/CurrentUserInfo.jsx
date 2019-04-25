import cn from 'classnames';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import {
  ClickAwayListener,
  ButtonBase,
  Grow,
  Paper,
  MenuList,
  Avatar,
  Popper,
} from '@astral-frontend/components';
import { withStyles } from '@astral-frontend/styles';

import Item from './Item';

const buttonRef = React.createRef();

class DashboardLayoutCurrentUserInfo extends Component {
  state = {
    showMenu: false,
  };

  handleTogglerButtonClick = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
    }));
  };

  handleClickAwayListenerClickAway = (event) => {
    if (buttonRef.current.contains(event.target)) {
      return;
    }

    this.setState({
      showMenu: false,
    });
  };

  render = () => {
    const {
      classes, className, children, avatarSrc, avatarAlt, userName,
    } = this.props;
    const { showMenu } = this.state;

    return (
      <div className={cn(classes.root, className)}>
        <ButtonBase
          className={cn(classes.toggler)}
          buttonRef={buttonRef}
          onClick={this.handleTogglerButtonClick}
        >
          <Avatar className={classes.avatar} src={avatarSrc} onClick={this.onPopoverToggle}>
            {avatarAlt}
          </Avatar>
          <div className={classes.user}>
            <div className={classes.userName}>{userName}</div>
          </div>
        </ButtonBase>
        <Popper transition open={showMenu} anchorEl={buttonRef.current}>
          {({ TransitionProps }) => (
            <Grow {...TransitionProps}>
              <Paper className={classes.popperPaper}>
                <ClickAwayListener onClickAway={this.handleClickAwayListenerClickAway}>
                  <MenuList disablePadding>{children}</MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  };
}

DashboardLayoutCurrentUserInfo.Item = Item;

DashboardLayoutCurrentUserInfo.defaultProps = {
  className: null,
  avatarSrc: null,
};

DashboardLayoutCurrentUserInfo.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  avatarSrc: PropTypes.string,
  avatarAlt: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default withStyles(theme => ({
  root: {
    borderTop: '0.5px solid rgba(29, 63, 102, 0.45)',
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
    width: '40px',
    height: '40px',
    marginRight: '15px',
    fontSize: 18,
    color: theme.palette.common.white,
    background: theme.palette.primary.dark,
  },
  user: {
    textAlign: 'left',
    // TODO: вынести в palette
    color: '#072d57',
  },
  userName: {
    fontWeight: 400,
    fontSize: '14px',
  },
  popperPaper: {
    minWidth: '175px',
  },
}))(DashboardLayoutCurrentUserInfo);

// import cn from 'classnames';
// import PropTypes from 'prop-types';
// import React from 'react';
// import { withStyles } from '@astral-frontend/styles';
// import { Avatar } from '@astral-frontend/components';

// const DashboardLayoutCurrentUserInfo = ({
//   classes, className, avatarAlt, userName, ...props
// }) => (
//   <div className={cn(classes.root, className)} {...props}>
//     <Avatar className={cn(classes.avatar, className)}>{avatarAlt}</Avatar>
//     <div className={cn(classes.label, className)}>{userName}</div>
//   </div>
// );
// DashboardLayoutCurrentUserInfo.defaultProps = {
//   className: null,
// };

// DashboardLayoutCurrentUserInfo.propTypes = {
//   classes: PropTypes.shape({}).isRequired,
//   className: PropTypes.string,
//   avatarAlt: PropTypes.string.isRequired,
//   userName: PropTypes.string.isRequired,
// };

// export default withStyles(
//   theme => ({
//     root: {
//       display: 'flex',
//       alignItems: 'center',
//       margin: 'auto 15px 0px 15px',
//       padding: '15px 0',
//       borderTop: '0.5px solid rgba(29, 63, 102, 0.45)',
//     },
//     avatar: {
//       color: '#fff',
//       backgroundColor: theme.palette.primary.dark,
//     },
//     label: {
//       marginLeft: '5px',
//       color: theme.palette.text.primary.main,
//       fontSize: '14px',
//     },
//   }),
//   { name: 'DashboardLayoutCurrentUserInfo' },
// )(DashboardLayoutCurrentUserInfo);
