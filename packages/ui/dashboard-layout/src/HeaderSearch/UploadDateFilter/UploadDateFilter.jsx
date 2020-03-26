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
import {
  subWeeks,
  startOfWeek,
  startOfToday,
  subMonths,
  startOfMonth,
  startOfYesterday,
} from '@astraledo-web/common/utils/date-fns';
import { useQueryParams } from '@astraledo-web/common/hooks';
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
  const [
    { uploadDateFrom, uploadDateTo, ...restQueryParams },
    setQueryParams,
  ] = useQueryParams();
  const [dateRange, setDateRange] = React.useState({
    uploadDateFrom,
    uploadDateTo,
  });
  const [checkedCheckbox, setCheckedCheckbox] = React.useState('all');
  const dateRangeButtons = {
    all: {
      label: 'За все время',
      getDateRange: () => ({}),
    },
    today: {
      label: 'Сегодня',
      getDateRange: () => ({
        uploadDateFrom: startOfToday().toISOString(),
        uploadDateTo: new Date().toISOString(),
      }),
    },
    tommorow: {
      label: 'Вчера',
      getDateRange: () => ({
        uploadDateFrom: startOfYesterday().toISOString(),
        uploadDateTo: new Date(startOfToday().getTime() - 1).toISOString(),
      }),
    },
    lastWeek: {
      label: 'Прошлая неделя',
      getDateRange: () => {
        const date = new Date();

        return {
          uploadDateFrom: subWeeks(
            startOfWeek(date, {
              weekStartsOn: 1,
            }),
            1,
          ).toISOString(),
          uploadDateTo: new Date(
            startOfWeek(date).setHours(23, 59, 59),
          ).toISOString(),
        };
      },
    },
    lastMonth: {
      label: 'Прошлый месяц',
      getDateRange: () => {
        const date = new Date();

        return {
          uploadDateFrom: subMonths(startOfMonth(date), 1).toISOString(),
          uploadDateTo: new Date(
            startOfMonth(date).getTime() - 1,
          ).toISOString(),
        };
      },
    },
    thisMonth: {
      label: 'Этот месяц',
      getDateRange: () => {
        const date = new Date();

        return {
          uploadDateFrom: startOfMonth(date).toISOString(),
          uploadDateTo: date.toISOString(),
        };
      },
    },
  };
  const handleDateRangeChange = event => {
    setCheckedCheckbox(event.target.value);
    setDateRange(dateRangeButtons[event.target.value].getDateRange());
    console.log(dateRangeButtons[event.target.value].getDateRange());
  };
  React.useEffect(() => {
    setQueryParams({
      ...dateRange,
      ...restQueryParams,
    });
  }, [JSON.stringify(dateRange)]);

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
                  onChange={handleDateRangeChange}
                >
                  {Object.entries(dateRangeButtons).map(
                    ([key, buttonOptions]) => (
                      <FlexContainer justifyContent="space-between" key={key}>
                        <FormControlLabel
                          label={buttonOptions.label}
                          value={key}
                          control={<Radio checked={key === checkedCheckbox} />}
                        />
                        <NavBarCounter count={123} />
                      </FlexContainer>
                    ),
                  )}
                  <FlexContainer
                    justifyContent="space-between"
                    key="custom-range"
                  >
                    <FormControlLabel
                      label="Выбрать другой период"
                      value="customRange"
                      control={<Radio checked={false} />}
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
