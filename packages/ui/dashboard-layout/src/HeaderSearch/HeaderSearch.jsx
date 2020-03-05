import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import {
  Filter,
  SearchInput,
  SearchInputFilter,
} from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';
import SettingsIcon from './SettingsIcon';
import CalendarIcon from './CalendarIcon';

const useStyles = makeStyles(
  theme => ({
    root: {
      width: '300px',
      margin: theme.spacing(4, 0, 4, 2),
      backgroundColor: '#ebeef1', // TODO: в тему
      transition: theme.transitions.create('width'),
      '&:focus-within': {
        width: '100%',
      },
    },
  }),
  { name: 'DashboardLayoutHeaderSearch' },
);

const DashboardLayoutHeaderSearch = ({
  className,
  placeholder,
  inputValue,
  defaultInputValue,
  onInputChange,
}) => {
  const classes = useStyles();

  return (
    <SearchInput
      className={cn(classes.root, className)}
      placeholder={placeholder}
      value={inputValue}
      defaultValue={defaultInputValue}
      onChange={onInputChange}
      renderFilters={() => (
        <>
          <Filter disabled={false} Icon={CalendarIcon}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </Filter>
          <Filter disabled={false} Icon={SettingsIcon}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </Filter>
        </>
      )}
    />
  );
};

DashboardLayoutHeaderSearch.defaultProps = {
  className: null,
  placeholder: 'Поиск',
  inputValue: undefined,
  defaultInputValue: undefined,
};

DashboardLayoutHeaderSearch.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultInputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onInputChange: PropTypes.func.isRequired,
};

export default DashboardLayoutHeaderSearch;
