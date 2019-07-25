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
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const buttonRef = React.createRef();
  const handleTogglerButtonClick = (event) => {
    const { currentTarget } = event;
    setOpen(prevValue => !prevValue);
    setAnchorEl(currentTarget);
  };
  const handleClickAwayListenerClickAway = (event) => {
    if (!buttonRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  return (
    <div {...props} className={cn(classes.root, className)}>
      <ClickAwayListener onClickAway={handleClickAwayListenerClickAway}>
        <div>
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
          <Popper placement="top" transition open={open} anchorEl={anchorEl}>
            {({ TransitionProps }) => (
              <Grow {...TransitionProps}>
                <Paper className={classes.popperPaper}>
                  <MenuList disablePadding>{children}</MenuList>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </ClickAwayListener>
    </div>
  );
};

DashboardLayoutCurrentUserInfo.Item = Item;

DashboardLayoutCurrentUserInfo.defaultProps = {
  className: null,
  avatarSrc: null,
};

DashboardLayoutCurrentUserInfo.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  avatarSrc: PropTypes.string,
  avatarAlt: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default DashboardLayoutCurrentUserInfo;
