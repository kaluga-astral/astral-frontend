import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { SearchInput } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      width: '300px',
      margin: theme.spacing(4, 0, 4, 2),
      backgroundColor: theme.palette.gray[100],
      // transition: theme.transitions.create('width'),
      // '&:focus-within': {
      //   width: '100%',
      // },
    },
  }),
  { name: 'DashboardLayoutHeaderSearch' },
);

const DashboardLayoutHeaderSearch = ({
  className,
  placeholder,
  defaultInputValue,
  onInputChange,
  renderFilters,
}) => {
  const classes = useStyles();
  const [inputValue, setValue] = React.useState(defaultInputValue);

  const handleInputChange = React.useCallback(event => {
    setValue(event.target.value);
    onInputChange(event);
  }, []);

  React.useEffect(() => {
    if (!defaultInputValue) {
      setValue('');
    }
  }, [defaultInputValue]);

  return (
    <SearchInput
      className={cn(classes.root, className)}
      placeholder={placeholder}
      value={inputValue ?? ''}
      onChange={handleInputChange}
      renderFilters={renderFilters}
    />
  );
};

DashboardLayoutHeaderSearch.defaultProps = {
  className: null,
  placeholder: 'Поиск',
  defaultInputValue: '',
  renderFilters: null,
};

DashboardLayoutHeaderSearch.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  defaultInputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onInputChange: PropTypes.func.isRequired,
  renderFilters: PropTypes.func,
};

export default DashboardLayoutHeaderSearch;
