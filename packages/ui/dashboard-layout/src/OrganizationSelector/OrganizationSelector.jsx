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
} from '@astral-frontend/components';

import { withStyles } from '@astral-frontend/styles';
import CurrentOrganization from './OrganizationSelectorCurrentOrganization';
import OrganizationSelectorItem from './OrganizationSelectorItem';
import OrganizationSelectorNotFoundPlaceholder from './OrganizationSelectorNotFoundPlaceholder';

const DashboardLayoutOrganizationSelector = ({
  classes,
  className,
  children,
  currentOrganization,
  NotFoundPlaceholder,
}) => {
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
    <div className={cn(classes.root, className)}>
      <ClickAwayListener onClickAway={handleClickAwayListenerClickAway}>
        <>
          <CurrentOrganization
            name={currentOrganization && currentOrganization.name}
            onClick={handleTogglerButtonClick}
          />
          <Popper transition open={open} anchorEl={anchorEl} onClick={() => setOpen(false)}>
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
        </>
      </ClickAwayListener>
    </div>
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

export default withStyles({
  root: {
    display: 'flex',
    height: '100%',
    flexGrow: 1,
    justifyContent: 'flex-end',
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
    backgrounColor: 'white !important',
  },
})(DashboardLayoutOrganizationSelector);
