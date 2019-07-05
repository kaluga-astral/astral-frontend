import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { SearchIcon } from '@astral-frontend/icons';
import { makeStyles } from '@astral-frontend/styles';

import Input from './HeaderSearchInput';

const useStyles = makeStyles(
  theme => ({
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
      margin: '0 0 0 15px',
      color: theme.palette.grey[500],
    },
    icon: {
      position: 'absolute',
      fontSize: '20px',
      margin: '0 20px',
    },
  }),
  { name: 'DashboardLayoutHeaderSearch' },
);

const DashboardLayoutHeaderSearch = ({
  className, inputValue, onInputChange, ...props
}) => {
  const classes = useStyles();

  return (
    <div className={cn(classes.root, className)}>
      <SearchIcon className={classes.icon} />
      <Input value={inputValue} onChange={onInputChange} {...props} />
    </div>
  );
};

DashboardLayoutHeaderSearch.defaultProps = {
  className: null,
  placeholder: 'Поиск',
  inputValue: '',
};

DashboardLayoutHeaderSearch.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onInputChange: PropTypes.func.isRequired,
};

export default DashboardLayoutHeaderSearch;
