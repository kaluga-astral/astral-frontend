import React from 'react';
import MuiSwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { withStyles } from '@material-ui/core/styles';

import { MenuList } from '../../../../Menu';
import IconButton from '../../../../IconButton';
import SvgIcon from '../../../../SvgIcon';

const SwipeableDrawer = ({
  classes, children, onClose, ...props
}) => (
  <MuiSwipeableDrawer onClose={onClose} {...props}>
    <div className={classes.actions}>
      <IconButton onClick={onClose}>
        <SvgIcon viewBox="0 0 24 24">
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            fill="#000000"
          />
          <path d="M0 0h24v24H0z" fill="none" />
        </SvgIcon>
      </IconButton>
    </div>
    <MenuList className={classes.menuList}>{children}</MenuList>
  </MuiSwipeableDrawer>
);

export default withStyles({
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  menuList: {
    width: '250px',
  },
})(SwipeableDrawer);
