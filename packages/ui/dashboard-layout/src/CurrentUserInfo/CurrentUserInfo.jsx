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

const useStyles = makeStyles(
  theme => ({
    divider: {
      margin: theme.spacing(0, 2),
      height: '1px',
      backgroundColor: 'rgba(29, 63, 102, 0.45)',
    },
    button: {
      width: '100%',
      padding: theme.spacing(3, 4),
      overflow: 'hidden',
      justifyContent: 'left',
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
      marginLeft: theme.spacing(2),
      textAlign: 'left',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    popperPaper: {
      minWidth: '175px',
    },
  }),
  { name: 'DashboardLayoutCurrentUserInfo' },
);

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
    <div className={cn(classes.root, className)}>
      <div className={classes.divider} />
      <ClickAwayListener onClickAway={handleClickAway} {...props}>
        <ButtonBase
          className={classes.button}
          buttonRef={buttonRef}
          onClick={handleTogglerButtonClick}
        >
          <Avatar className={classes.avatar} src={avatarSrc}>
            {avatarAlt}
          </Avatar>
          <div className={classes.userName}>{userName}</div>
        </ButtonBase>
      </ClickAwayListener>

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
