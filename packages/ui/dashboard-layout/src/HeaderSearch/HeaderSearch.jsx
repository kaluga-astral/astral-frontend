import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { FlexContainer, InputBase } from '@astral-frontend/components';
import { SearchIcon } from '@astral-frontend/icons';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      width: '300px',
      margin: theme.spacing(2, 0),
      borderRadius: theme.shape.borderRadius,
      color: '#b7c2ce', // TODO: в тему
      backgroundColor: '#ebeef1', // TODO: в тему
      transition: theme.transitions.create('width'),
      '&:focus-within': {
        // &:has($inputInput:placeholder-shown)
        width: '100%',
      },
    },
    icon: {
      margin: '0 16px',
      zIndex: 1,
    },
    inputRoot: {
      width: '100%',
      height: '100%',
    },
    inputInput: {
      paddingRight: theme.spacing(4),
      '&::placeholder': {
        opacity: 1,
        color: '#b7c2ce', // TODO: в тему
      },
    },
  }),
  { name: 'DashboardLayoutHeaderSearch' },
);

const DashboardLayoutHeaderSearch = ({
  className, inputValue, onInputChange, ...props
}) => {
  const classes = useStyles();

  return (
    <FlexContainer className={cn(classes.root, className)} alignItems="center">
      <SearchIcon className={classes.icon} />
      <InputBase
        placeholder="Search…"
        inputProps={{
          'aria-label': 'Search',
        }}
        type="search"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        {...props}
      />
    </FlexContainer>
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
