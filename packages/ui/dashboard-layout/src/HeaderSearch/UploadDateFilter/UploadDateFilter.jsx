import React from 'react';

import {
  FormControl,
  Radio,
  RadioGroup,
  SearchInputFilter,
  FormControlLabel,
  FlexContainer,
} from '@astral-frontend/components';
import { Form, Field } from '@astral-frontend/forms';
import { FormLabel } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';
import CalendarIcon from './CalendarIcon';
import NavBarCounter from '../../NavBarCounter';

const useStyles = makeStyles(
  theme => ({
    root: {},
    formControl: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(6),
    },
    formLabel: {
      marginBottom: theme.spacing(2),
      color: theme.palette.gray[800],
      fontWeight: theme.typography.fontWeightBold,
    },
    divider: {
      height: '1px',
      margin: theme.spacing(0, 6, 2),
      backgroundColor: theme.palette.primary.light,
      border: 'none',
    },
  }),
  { name: 'UploadDateFilter' },
);

const UploadDateFilter = () => {
  const classes = useStyles();
  const [dateRange, setDateRange] = React.useState('all');
  const handleDateRangeChange = event => {
    setDateRange(event.target.value);
  };
  const dateRangeButtons = [
    // {
    //   label: 'За все время',
    //   value: 'all',
    // },
    {
      label: 'Сегодня',
      value: 'today',
      getDateRange: () => {
        const date = new Date();

        return {
          startDate: new Date(
            date.getTime() -
              date.getHours() * 3600 * 1000 -
              date.getMinutes() * 60 * 1000 -
              date.getSeconds() * 1000 -
              date.getMilliseconds(),
          ).toISOString(),
          endDate: date.toISOString(),
        };
      },
    },
    {
      label: 'Вчера',
      value: 'tommorow',
      getDateRange: () => {
        const date = new Date();

        return {
          startDate: new Date(
            date.getTime() -
              date.getHours() * 3600 * 1000 -
              date.getMinutes() * 60 * 1000 -
              date.getSeconds() * 1000 -
              date.getMilliseconds() -
              24 * 3600 * 1000,
          ).toISOString(),
          endDate: new Date(
            date.getTime() -
              date.getHours() * 3600 * 1000 -
              date.getMinutes() * 60 * 1000 -
              date.getSeconds() * 1000 -
              date.getMilliseconds() -
              1000,
          ).toISOString(),
        };
      },
    },
    {
      label: 'Последняя неделя',
      value: 'last-week',
    },
    {
      label: 'Последний месяц',
      value: 'last-month',
    },
    {
      label: 'Этот месяц',
      value: 'this-month',
    },
    // {
    //   label: 'Выбрать другой период',
    //   value: 'custom-range',
    // },
  ];

  return (
    <SearchInputFilter disabled={false} Icon={CalendarIcon}>
      <Form onSubmit={() => {}}>
        {() => [
          <Field
            key={1}
            name="Период"
            render={({ error }) => (
              <FormControl
                fullWidth
                error={Boolean(error)}
                component="fieldset"
                className={classes.formControl}
              >
                <FormLabel component="legend" className={classes.formLabel}>
                  Период
                </FormLabel>
                <RadioGroup
                  aria-label="Период"
                  name="Период"
                  value={dateRange}
                  onChange={handleDateRangeChange}
                >
                  <FlexContainer justifyContent="space-between" key="all">
                    <FormControlLabel
                      label="За все время"
                      value="all"
                      control={<Radio checked={dateRange === 'all'} />}
                    />
                  </FlexContainer>
                  {dateRangeButtons.map(buttonOoptions => (
                    <FlexContainer
                      justifyContent="space-between"
                      key={buttonOoptions.value}
                    >
                      <FormControlLabel
                        label={buttonOoptions.label}
                        value={buttonOoptions.value}
                        control={
                          <Radio checked={dateRange === buttonOoptions.value} />
                        }
                      />
                      <NavBarCounter count={123} />
                    </FlexContainer>
                  ))}
                  <FlexContainer
                    justifyContent="space-between"
                    key="custom-range"
                  >
                    <FormControlLabel
                      label="Выбрать другой период"
                      value="custom-range"
                      control={<Radio checked={dateRange === 'custom-range'} />}
                    />
                  </FlexContainer>
                </RadioGroup>
              </FormControl>
            )}
          />,
        ]}
      </Form>
    </SearchInputFilter>
  );
};

export default UploadDateFilter;
