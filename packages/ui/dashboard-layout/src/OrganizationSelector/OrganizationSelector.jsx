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

const rootRef = React.createRef();

const useStyles = makeStyles(
  () => ({
    root: {
      margin: '0 0 0 15px',
      height: '100%',
    },
    popperPaper: {
      maxHeight: '325px',
      maxWidth: '300px',
      overflowY: 'auto',
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.09)',
    },
    addButton: {
      width: '100%',
      position: 'sticky',
      bottom: 0,
      zIndex: 1000,
      backgroundColor: 'white',
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
  const handleTogglerButtonClick = () => {
    setOpen(prevValue => !prevValue);
  };
  const handleClickAwayListenerClickAway = () => {
    setOpen(false);
  };
  const renderChildren = () => {
    if (children.length > 0) {
      return (
        <MenuList
          disablePadding
          // TODO: #25542
          onClick={() => {
            setOpen(false);
          }}
        >
          {children}
          <MenuItem className={classes.addButton} component={Link} to={addLinkHref}>
            + Добавить организацию
          </MenuItem>
        </MenuList>
      );
    }

    return <NotFoundPlaceholder />;
  };

  return (
    <FlexContainer
      {...props}
      ref={rootRef}
      justifyContent="flex-end"
      className={cn(classes.root, className)}
    >
      <ClickAwayListener onClickAway={handleClickAwayListenerClickAway}>
        <CurrentOrganization
          name={currentOrganization && currentOrganization.name}
          onClick={handleTogglerButtonClick}
        />
      </ClickAwayListener>
      <Popper transition open={open} anchorEl={rootRef.current} style={{ zIndex: 1300 }}>
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
