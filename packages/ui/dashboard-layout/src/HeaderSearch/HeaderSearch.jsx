import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import {
  Checkbox,
  FormLabel,
  Radio,
  RadioGroup,
  SearchInput,
  SearchInputFilter,
  FormControlLabel,
  FlexContainer,
} from '@astral-frontend/components';
import {
  CheckboxGroupField,
  Form,
  RadioGroupField,
} from '@astral-frontend/forms';
import { makeStyles } from '@astral-frontend/styles';
import NavBarCounter from '../NavBarCounter';
import CalendarIcon from './UploadDateFilter/CalendarIcon';
import DocumentsFilter from './DocumentsFilter';
import UploadDateFilter from './UploadDateFilter';

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
          <UploadDateFilter />
          <DocumentsFilter />
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
