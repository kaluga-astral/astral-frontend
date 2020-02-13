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
  ContentState,
} from '@astral-frontend/components';

import { makeStyles } from '@astral-frontend/styles';

import CurrentOrganization from './OrganizationSelectorCurrentOrganization';
import OrganizationSelectorItem from './OrganizationSelectorItem';
import OrganizationSelectorNotFoundPlaceholder from './OrganizationSelectorNotFoundPlaceholder';

const rootRef = React.createRef();

const useStyles = makeStyles(
  theme => ({
    root: {
      height: '100%',
      flexShrink: 0,
    },
    popperPaper: {
      maxHeight: '325px',
      maxWidth: '300px',
      overflowY: 'auto',
      boxShadow: theme.shadows[2],
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
  loading,
  error,
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
          <MenuItem
            className={classes.addButton}
            component={Link}
            to={addLinkHref}
          >
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
      <ContentState loading={loading} error={error}>
        <ClickAwayListener onClickAway={handleClickAwayListenerClickAway}>
          <CurrentOrganization
            name={currentOrganization && currentOrganization.name}
            onClick={handleTogglerButtonClick}
          />
        </ClickAwayListener>
        <Popper
          transition
          open={open}
          anchorEl={rootRef.current}
          style={{ zIndex: 1300 }}
        >
          {({ TransitionProps }) => (
            <Grow {...TransitionProps}>
              <Paper className={classes.popperPaper}>{renderChildren()}</Paper>
            </Grow>
          )}
        </Popper>
      </ContentState>
    </FlexContainer>
  );
};

DashboardLayoutOrganizationSelector.defaultProps = {
  className: null,
  error: null,
  currentOrganization: null,
};

DashboardLayoutOrganizationSelector.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Error),
  children: PropTypes.node.isRequired,
  addLinkHref: PropTypes.string.isRequired,
  currentOrganization: PropTypes.shape({
    name: PropTypes.string,
  }),
  NotFoundPlaceholder: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
    PropTypes.func.isRequired,
  ]).isRequired,
};

DashboardLayoutOrganizationSelector.Item = OrganizationSelectorItem;
DashboardLayoutOrganizationSelector.NotFoundPlaceholder = OrganizationSelectorNotFoundPlaceholder;

export default DashboardLayoutOrganizationSelector;
