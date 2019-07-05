import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  FlexContainer,
} from '@astral-frontend/components';

import { makeStyles } from '@astral-frontend/styles';

import CurrentOrganization from './OrganizationSelectorCurrentOrganization';
import OrganizationSelectorItem from './OrganizationSelectorItem';
import OrganizationSelectorNotFoundPlaceholder from './OrganizationSelectorNotFoundPlaceholder';

const useStyles = makeStyles(
  () => ({
    root: {
      margin: '0 0 0 15px',
      height: '100%',
    },
    popperPaper: {
      maxHeight: '325px',
      overflowY: 'auto',
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.09)',
    },
  }),
  { name: 'DashboardLayoutOrganizationSelector' },
);

const DashboardLayoutOrganizationSelector = ({
  className,
  children,
  addLinkHref,
  currentOrganization,
  NotFoundPlaceholder,
  ...props
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleTogglerButtonClick = (event) => {
    const { currentTarget } = event;

    setOpen(prevValue => !prevValue);
    setAnchorEl(currentTarget);
  };
  const handleClickAwayListenerClickAway = () => {
    setOpen(false);
  };
  const renderChildren = () => {
    if (children.length > 0) {
      return (
        <MenuList disablePadding>
          {children}
          <MenuItem component={Link} to={addLinkHref}>
            + Добавить организацию
          </MenuItem>
        </MenuList>
      );
    }

    return <NotFoundPlaceholder />;
  };

  return (
    <FlexContainer justifyContent="flex-end" className={cn(classes.root, className)}>
      <ClickAwayListener onClickAway={handleClickAwayListenerClickAway}>
        <CurrentOrganization
          name={currentOrganization && currentOrganization.name}
          onClick={handleTogglerButtonClick}
        />
      </ClickAwayListener>
      <Popper transition open={open} anchorEl={anchorEl} {...props}>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper className={classes.popperPaper}>{renderChildren()}</Paper>
          </Grow>
        )}
      </Popper>
    </FlexContainer>
  );
};

DashboardLayoutOrganizationSelector.defaultProps = {
  className: null,
};

DashboardLayoutOrganizationSelector.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  addLinkHref: PropTypes.string.isRequired,
  currentOrganization: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  NotFoundPlaceholder: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
    PropTypes.func.isRequired,
  ]).isRequired,
};

DashboardLayoutOrganizationSelector.Item = OrganizationSelectorItem;
DashboardLayoutOrganizationSelector.NotFoundPlaceholder = OrganizationSelectorNotFoundPlaceholder;

export default DashboardLayoutOrganizationSelector;
