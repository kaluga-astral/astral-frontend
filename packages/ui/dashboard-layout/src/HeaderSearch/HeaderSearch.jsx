import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { InputBase } from '@astral-frontend/components';
import { withStyles } from '@astral-frontend/styles';
import { SearchIcon } from '@astral-frontend/icons';

const Input = withStyles(theme => ({
  root: {
    width: '100%',
  },
  input: {
    padding: '15px 15px 15px 60px',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.grey[100],
    lineHeight: '20px',
    fontSize: '14px',
  },
}))(InputBase);

const DashboardLayoutHeaderSearch = ({
  classes, className, onChange, ...props
}) => (
  <div className={cn(classes.root, className)}>
    <SearchIcon className={classes.icon} />
    <Input onChange={e => onChange(e.target.value)} {...props} />
  </div>
);

DashboardLayoutHeaderSearch.defaultProps = {
  className: null,
  placeholder: 'Поиск',
};

DashboardLayoutHeaderSearch.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default withStyles(
  theme => ({
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      flexGrow: 2,
      padding: '0 15px',
      color: theme.palette.grey[500],
    },
    icon: {
      position: 'absolute',
      fontSize: '20px',
      margin: '0 20px',
    },
  }),
  { name: 'DashboardLayoutHeaderSearch' },
)(DashboardLayoutHeaderSearch);
