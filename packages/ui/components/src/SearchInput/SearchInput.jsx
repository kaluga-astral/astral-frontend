import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { SearchIcon } from '@astral-frontend/icons';
import { makeStyles } from '@astral-frontend/styles';

import FlexContainer from '../FlexContainer';
import InputBase from '../InputBase';

const useStyles = makeStyles(
  theme => ({
    root: {
      height: theme.spacing(12),
      margin: theme.spacing(4, 0),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.gray[500],
      transition: theme.transitions.create('width'),
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
        color: theme.palette.gray[500],
      },
    },
  }),
  { name: 'SearchInput' },
);

const SearchInput = ({ className, ...props }) => {
  const classes = useStyles();

  return (
    <FlexContainer className={cn(classes.root, className)} alignItems="center">
      <SearchIcon className={classes.icon} />
      <InputBase
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{
          'aria-label': 'Поиск',
        }}
        type="search"
        {...props}
      />
    </FlexContainer>
  );
};

SearchInput.defaultProps = {
  className: null,
  placeholder: 'Поиск',
  value: undefined,
};

SearchInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

export default SearchInput;
