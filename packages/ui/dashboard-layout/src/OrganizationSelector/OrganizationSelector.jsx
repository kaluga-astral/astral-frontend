import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { withStyles } from '@astral-frontend/styles';
import {
  OrganizationIcon,
  OrganizationListIcon,
  ArrowIcon,
} from '@astral-frontend/icons';
import {
  Avatar,
  Popper,
  Paper,
  Fade,
  ButtonBase,
} from '@astral-frontend/components';
import OrganizationSelectorMenuItem from '../OrganizationSelectorMenuItem/OrganizationSelectorMenuItem';
import OrganizationSelectorAddButton from '../OrganizationSelectorAddButton/OrganizationSelectorAddButton';

const DashboardLayoutOrganizationsSelector = ({
  classes,
  className,
  items,
}) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentItem, setItem] = useState(items[0].name);

  return (
    <div className={cn(classes.root, className)}>
      <ButtonBase
        onClick={(e) => {
          setOpen(prevOpen => !prevOpen);
          setAnchorEl(e.currentTarget);
        }}
        className={cn(classes.button, className)}
      >
        <div className={cn(classes.organizationName, className)}>
          {currentItem}
        </div>

        <Avatar className={cn(classes.organizationAvatar, className)}>
          <OrganizationListIcon
            className={cn(classes.organizationListIcon, className)}
            viewBox="0 0 16 16"
          />
        </Avatar>
        <ArrowIcon
          aria-haspopup="true"
          className={
            !open
              ? cn(classes.arrayIcon, className)
              : cn(classes.openArrayIcon, className)
          }
          viewBox="0 0 12 6"
        />
      </ButtonBase>

      {items.length > 1 ? (
        <Popper open={open} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper className={cn(classes.popper, className)}>
                <OrganizationSelectorMenuItem
                  items={items}
                  open={setOpen}
                  currentOrg={setItem}
                />
              </Paper>
            </Fade>
          )}
        </Popper>
      ) : (
        <Popper open={open} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper
                className={cn(classes.popper, className)}
                onClick={() => {
                  setOpen(prevOpen => !prevOpen);
                }}
              >
                <div className={cn(classes.emptyPopperContent, className)}>
                  <OrganizationIcon
                    className={cn(classes.emptyPopperContentIcon, className)}
                    viewBox="0 0 19 19"
                  />
                  <p className={cn(classes.popperContentText, className)}>
                    Мы не нашли других ваших компаний. Добавьте их в систему
                    чтобы удобно отслеживать документооборот!
                  </p>
                  <OrganizationSelectorAddButton />
                </div>
              </Paper>
            </Fade>
          )}
        </Popper>
      )}
    </div>
  );
};

export default withStyles(
  () => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      width: '270px',
    },
    button: {
      display: 'flex',
      justifyContent: 'space-around',
      width: '270px',
    },
    organizationName: {
      maxWidth: '170px',
      fontSize: '14px',
    },
    organizationAvatar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      backgroundColor: '#4E30C7',
    },
    organizationLabel: {
      marginLeft: '5px',
      color: '#072D57',
      fontSize: '14px',
    },
    organizationListIcon: {
      width: '16px',
      height: '16px',
    },
    arrayIcon: {
      width: '12px',
      height: '6px',
      marginRight: '10px',
    },
    openArrayIcon: {
      width: '12px',
      height: '6px',
      marginRight: '10px',
      transform: 'rotate(180deg)',
    },
    popper: {
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.09)',
      marginTop: '17px',
    },
    emptyPopperContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '270px',
      height: '252px',
    },
    emptyPopperContentIcon: {
      width: '74px',
      height: '66px',
      fill: 'rgba(29, 63, 102, 0.45)',
    },
    popperContentText: {
      color: 'rgba(29, 63, 102, 0.62)',
      padding: '0 23px 0 23px',
      fontSize: '12px',
      textAlign: 'center',
    },
  }),
  { name: 'DashboardLayoutCurrentOrganizationSelector' },
)(DashboardLayoutOrganizationsSelector);

DashboardLayoutOrganizationsSelector.defaultProps = {
  className: null,
};

DashboardLayoutOrganizationsSelector.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
