/* eslint-disable react/prop-types */
import cn from 'classnames';
import React from 'react';
import {
  Popper, Grow, Paper, ClickAwayListener, MenuList,
} from '@astral-frontend/components';

import { withStyles } from '@astral-frontend/styles';
import CurrentOrganization from './OrganizationSelectorCurrentOrganization';
import OrganizationSelectorItem from './OrganizationSelectorItem';
import OrganizationSelectorNotFoundPlaceholder from './OrganizationSelectorNotFoundPlaceholder';

const buttonRef = React.createRef();

// FIXME: описать PropTypes и удалить eslint-disable react/prop-types
const DashboardLayoutOrganizationSelector = ({
  classes,
  className,
  children,
  currentOrganization,
  NotFoundPlaceholder,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleTogglerButtonClick = () => {
    setOpen(prevValue => !prevValue);
  };
  const handleClickAwayListenerClickAway = (event) => {
    if (!buttonRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  return (
    <div className={cn(classes.root, className)}>
      <CurrentOrganization
        buttonRef={buttonRef}
        name={currentOrganization.name}
        onClick={handleTogglerButtonClick}
      />
      <Popper transition open={open} anchorEl={buttonRef.current}>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper className={classes.popperPaper}>
              <ClickAwayListener onClickAway={handleClickAwayListenerClickAway}>
                {children.length > 0 ? <MenuList>{children}</MenuList> : <NotFoundPlaceholder />}
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

DashboardLayoutOrganizationSelector.Item = OrganizationSelectorItem;
DashboardLayoutOrganizationSelector.NotFoundPlaceholder = OrganizationSelectorNotFoundPlaceholder;

export default withStyles({
  root: {
    width: '269px',
    height: '64px',
    right: '4px',
    display: 'flex',
    justifyContent: 'space-around',
  },
})(DashboardLayoutOrganizationSelector);
