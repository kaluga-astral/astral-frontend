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
import { __Context as LayoutContext } from '../Layout';
import { __Context as AsideContext } from '../Aside';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    borderTop: '0.5px solid rgba(29, 63, 102, 0.45)',
    width: '260px',
    overflow: 'hidden',
  },
  collapsed: {
    width: '70px',
  },
  toggler: {
    display: 'flex',
    width: '100%',
    height: '100%',
    padding: `${theme.spacing(5)}px`,
  },
  avatar: {
    width: '40px',
    height: '40px',
    fontSize: theme.typography.pxToRem(18),
    color: theme.palette.common.white,
    background: theme.palette.primary.dark,
  },
  userName: {
    fontWeight: 400,
    fontSize: theme.typography.pxToRem(14),
    marginLeft: `${theme.spacing(4)}px`,
    textAlign: 'left',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
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
  const classes = useStyles();
  const buttonRef = React.createRef();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { isTransitioning } = React.useContext(AsideContext);
  const { isSidebarOpen } = React.useContext(LayoutContext);
  const isUserNameVisible = !isTransitioning && isSidebarOpen;
  const handleTogglerButtonClick = event => {
    const { currentTarget } = event;
    setOpen(prevValue => !prevValue);
    setAnchorEl(currentTarget);
  };
  const handleClickAway = event => {
    if (!buttonRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div
        {...props}
        className={cn(
          classes.root,
          { [classes.collapsed]: !isSidebarOpen },
          className,
        )}
      >
        <ButtonBase
          className={cn(classes.toggler)}
          buttonRef={buttonRef}
          onClick={handleTogglerButtonClick}
        >
          <Avatar className={classes.avatar} src={avatarSrc}>
            {avatarAlt}
          </Avatar>
          {isUserNameVisible && (
            <div className={classes.userName}>{userName}</div>
          )}
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
