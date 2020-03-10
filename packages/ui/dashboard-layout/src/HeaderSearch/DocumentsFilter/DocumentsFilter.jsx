import React from 'react';

import {
  Checkbox,
  FormControl,
  FormGroup,
  Radio,
  RadioGroup,
  SearchInputFilter,
  FormControlLabel,
  FlexContainer,
} from '@astral-frontend/components';
import { Form, Field } from '@astral-frontend/forms';
import { FormLabel } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';
import { useQueryParams } from '@astraledo-web/common/hooks';
import SettingsIcon from './SettingsIcon';
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
  { name: 'DocumentsFilter' },
);

const DocumentsFilter = () => {
  const classes = useStyles();
  const [
    { recipientFilterOption, documentTypeFilterOptions, restQueryParams },
    setQueryParams,
  ] = useQueryParams();

  const [recipientType, setRecipientType] = React.useState(
    recipientFilterOption || 'allDocuments',
  );
  const handleRecipientTypeChange = event => {
    setRecipientType(event.target.value);
  };
  React.useEffect(() => {
    setQueryParams({
      recipientFilterOption: recipientType,
      documentTypeFilterOptions,
      restQueryParams,
    });
  }, [recipientType]);
  const recipientTypeButtons = [
    {
      label: 'Все документы',
      value: 'allDocuments',
    },
    {
      label: 'Назначен',
      value: 'assigned',
    },
    {
      label: 'Не назначен',
      value: 'notAssigned',
    },
  ];
  const [documentsTypes, setDocumentsTypes] = React.useState({
    allTypes: true,
    upd: false,
    ucd: false,
    informal: false,
    ...Object.fromEntries(
      [...documentTypeFilterOptions].map(item => [item, true]),
    ),
  });
  const handleDocumentsTypesChange = name => event => {
    event.persist();
    setDocumentsTypes(prevValue => ({
      ...prevValue,
      [name]: event.target.checked,
    }));
  };
  React.useEffect(() => {
    setQueryParams({
      recipientFilterOption: recipientType,
      documentTypeFilterOptions: Object.keys(documentsTypes).filter(
        key => documentsTypes[key],
      ),
      restQueryParams,
    });
  }, [documentsTypes]);
  const documentsTypesButtons = Object.entries(documentsTypes).map(
    ([key, value]) => ({
      checked: value,
      value: key,
      onChange: handleDocumentsTypesChange(key),
    }),
  );
  const documentsTypesButtonsLabels = {
    allTypes: 'Все типы',
    upd: 'УПД',
    ucd: 'УКД',
    informal: 'Неформализованный',
  };

  return (
    <SearchInputFilter disabled={false} Icon={SettingsIcon}>
      <Form onSubmit={() => {}}>
        {() => [
          <Field
            key={1}
            name="Получатель"
            render={({ error }) => (
              <FormControl
                fullWidth
                error={Boolean(error)}
                component="fieldset"
                className={classes.formControl}
              >
                <FormLabel component="legend" className={classes.formLabel}>
                  Получатель
                </FormLabel>
                <RadioGroup
                  aria-label="Получатель"
                  name="Получатель"
                  value={recipientType}
                  onChange={handleRecipientTypeChange}
                >
                  {recipientTypeButtons.map(buttonOoptions => (
                    <FlexContainer
                      justifyContent="space-between"
                      key={buttonOoptions.value}
                    >
                      <FormControlLabel
                        label={buttonOoptions.label}
                        value={buttonOoptions.value}
                        control={
                          <Radio
                            checked={recipientType === buttonOoptions.value}
                          />
                        }
                      />
                      <NavBarCounter count={123} />
                    </FlexContainer>
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />,
          <hr key={2} className={classes.divider} />,
          <FormControl
            key={3}
            component="fieldset"
            className={classes.formControl}
          >
            <FormLabel component="legend" className={classes.formLabel}>
              Тип документа
            </FormLabel>
            <FormGroup>
              {documentsTypesButtons.map(buttonOptions => (
                <FlexContainer
                  justifyContent="space-between"
                  key={buttonOptions.value}
                >
                  <FormControlLabel
                    label={documentsTypesButtonsLabels[buttonOptions.value]}
                    control={
                      <Checkbox
                        checked={buttonOptions.checked}
                        onChange={buttonOptions.onChange}
                        value={buttonOptions.value}
                      />
                    }
                  />
                  <NavBarCounter count={123} />
                </FlexContainer>
              ))}
            </FormGroup>
          </FormControl>,
        ]}
      </Form>
    </SearchInputFilter>
  );
};

export default DocumentsFilter;
