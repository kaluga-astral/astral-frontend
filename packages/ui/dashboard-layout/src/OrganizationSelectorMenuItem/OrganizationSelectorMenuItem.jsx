import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';
import { MenuItem } from '@astral-frontend/components';
import { OrganizationIcon } from '@astral-frontend/icons';
import OrganizationSelectorAddButton from '../OrganizationSelectorAddButton/OrganizationSelectorAddButton';

const OrganizationSelectorMenuItem = ({
  classes,
  className,
  items,
  open,
  currentOrg,
}) => (
  <div className={cn(classes.popperContent, className)}>
    {items.map((item, index) => (
      <MenuItem
        className={cn(classes.popperContentMenuItem, className)}
        key={index}
        onClick={() => {
          open(false);
          currentOrg(items[index].name);
        }}
      >
        <div className={cn(classes.popperContentOrganizations, className)}>
          <OrganizationIcon
            className={cn(classes.popperContentIcon, className)}
            viewBox="0 0 20 18"
          />
          <div className={cn(classes.popperContentLabel, className)}>
            {item.name}
          </div>
        </div>
      </MenuItem>
    ))}

    <div className={cn(classes.popperContentOrganizations, className)}>
      <OrganizationSelectorAddButton />
    </div>
  </div>
);
OrganizationSelectorMenuItem.defaultProps = {
  className: null,
};

OrganizationSelectorMenuItem.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.func.isRequired,
  currentOrg: PropTypes.func.isRequired,
};

export default withStyles(
  () => ({
    popperContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '270px',
    },
    popperContentOrganizations: {
      display: 'flex',
    },
    popperContentMenuItem: {
      margin: '0',
      padding: '7px 0 5px 15px',
    },
    popperContentLabel: {
      fontSize: '12px',
      margin: '0',
      padding: '0 0 0 15px',
      color: '#072D57',
      maxWidth: '260px',
    },
    popperContentIcon: {
      width: '20px',
      height: '18px',
      fill: '#6746EB',
    },
  }),
  { name: 'OrganizationSelectorMenuItem' },
)(OrganizationSelectorMenuItem);
