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
  Button,
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
      maxWidth: '300px',
      height: '100%',
    },
    popperPaper: {
      maxHeight: '325px',
      overflowY: 'auto',
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.09)',
    },
    addButton: {
      width: '100%',
      fontWeight: 'bold',
      justifyContent: 'left',
      padding: '15px',
      position: 'sticky',
      bottom: 0,
      zIndex: 1000,
      backgroundColor: 'white !important',
    },
  }),
  { name: 'DashboardLayoutOrganizationSelector' },
);

const DashboardLayoutOrganizationSelector = ({
  className,
  children,
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

  return (
    <ClickAwayListener onClickAway={handleClickAwayListenerClickAway}>
      <FlexContainer justifyContent="flex-end" className={cn(classes.root, className)}>
        <CurrentOrganization
          name={currentOrganization && currentOrganization.name}
          onClick={handleTogglerButtonClick}
        />
        <Popper
          transition
          open={open}
          anchorEl={anchorEl}
          onClick={() => setOpen(false)}
          {...props}
        >
          {({ TransitionProps }) => (
            <Grow {...TransitionProps}>
              <Paper className={classes.popperPaper}>
                {children.length > 0 ? (
                  <div>
                    <MenuList disablePadding>{children}</MenuList>
                    <Button
                      size="small"
                      component={Link}
                      to="/abonents/add"
                      className={classes.addButton}
                    >
                      + Добавить организацию
                    </Button>
                  </div>
                ) : (
                  <NotFoundPlaceholder />
                )}
              </Paper>
            </Grow>
          )}
        </Popper>
      </FlexContainer>
    </ClickAwayListener>
  );
};

DashboardLayoutOrganizationSelector.defaultProps = {
  className: null,
};

DashboardLayoutOrganizationSelector.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
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
