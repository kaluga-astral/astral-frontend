import cn from 'classnames';
import { uniqueId } from 'lodash-es';
import PropTypes from 'prop-types';
import React from 'react';

import {
  Checkbox,
  FormLabel,
  Radio,
  RadioGroup,
  SearchInput,
  SearchInputFilter,
} from '@astral-frontend/components';
import { Form, RadioGroupField } from '@astral-frontend/forms';
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
          <SearchInputFilter disabled={false} Icon={CalendarIcon}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </SearchInputFilter>
          <SearchInputFilter disabled={false} Icon={SettingsIcon}>
            <Form onSubmit={() => {}}>
              {() => [
                <RadioGroupField
                  groupLabel="Получатель"
                  name="Получатель"
                  options={[
                    {
                      key: uniqueId(),
                      label: 'Все документы',
                      value: 'all',
                    },
                    {
                      key: uniqueId(),
                      label: 'Назначен',
                      value: 'with-recipients',
                    },
                    {
                      key: uniqueId(),
                      label: 'Не назначен',
                      value: 'without-recipients',
                    },
                  ]}
                />,
                <RadioGroupField
                  groupLabel="Тип документа"
                  name="Тип документа"
                  options={[
                    {
                      key: uniqueId(),
                      label: 'Все типы',
                      value: 'all',
                    },
                    {
                      key: uniqueId(),
                      label: 'УПД',
                      value: 'UPD',
                    },
                    {
                      key: uniqueId(),
                      label: 'УКД',
                      value: 'UCD',
                    },
                    {
                      key: uniqueId(),
                      label: 'Неформализованный',
                      value: 'informal',
                    },
                  ]}
                />,
              ]}
            </Form>
          </SearchInputFilter>
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
