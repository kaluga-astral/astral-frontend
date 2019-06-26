import cn from 'classnames';
import { PropTypes } from 'prop-types';
import React from 'react';
import {
  ClickAwayListener,
  ButtonBase,
  Grow,
  Paper,
  MenuList,
  Avatar,
  Popper,
} from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import Item from './Item';

const useStyles = makeStyles(theme => ({
  root: {
    borderTop: '0.5px solid rgba(29, 63, 102, 0.45)',
    width: '260px',
  },
  toggler: {
    display: 'flex',
    width: '100%',
    height: '100%',
    padding: '20px',
  },
  avatar: {
    width: '40px',
    height: '40px',
    marginRight: '15px',
    fontSize: 18,
    color: theme.palette.common.white,
    background: theme.palette.primary.dark,
  },
  userName: {
    fontWeight: 400,
    fontSize: '14px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: ''
  },
  popperPaper: {
    minWidth: '175px',
  },
}));

const DashboardLayoutCurrentUserInfo = ({
  className,
  children,
  avatarSrc,
  avatarAlt,
  userName,
}) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const buttonRef = React.createRef();
  const handleTogglerButtonClick = () => {
    setOpen(prevState => !prevState.showMenu);
  };
  const handleClickAwayListenerClickAway = (event) => {
    if (!buttonRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  return (
    <div className={cn(classes.root, className)}>
      <ButtonBase
        className={cn(classes.toggler)}
        buttonRef={buttonRef}
        onClick={handleTogglerButtonClick}
      >
        <Avatar className={classes.avatar} src={avatarSrc}>
          {avatarAlt}
        </Avatar>
          <div className={classes.userName}>{userName}</div>
      </ButtonBase>
      <Popper transition open={open} anchorEl={buttonRef.current}>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper className={classes.popperPaper}>
              <ClickAwayListener onClickAway={handleClickAwayListenerClickAway}>
                <MenuList disablePadding>{children}</MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

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

export default DashboardLayoutCurrentUserInfo;
