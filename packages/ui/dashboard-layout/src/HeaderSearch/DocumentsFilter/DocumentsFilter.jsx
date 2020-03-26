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
    { recipientOption, documentTypes = [], ...restQueryParams },
    setQueryParams,
  ] = useQueryParams();
  const [recipientTypeOption, setRecipientTypeOption] = React.useState(
    recipientOption || 'allDocuments',
  );
  const handleRecipientTypeOptionChange = event => {
    setRecipientTypeOption(event.target.value);
  };
  React.useEffect(() => {
    setQueryParams(
      recipientTypeOption === 'allDocuments'
        ? {
            documentTypes,
            ...restQueryParams,
          }
        : {
            recipientOption: recipientTypeOption,
            documentTypes,
            ...restQueryParams,
          },
    );
  }, [recipientTypeOption]);
  const recipientTypeOptionButtons = [
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
      value: 'noRecipient',
    },
  ];
  const [documentTypesOption, setDocumentTypesOption] = React.useState({
    utd: false,
    ucd: false,
    informal: false,
    ...Object.fromEntries([...documentTypes].map(item => [item, true])),
  });
  const handleDocumentTypesOptionChange = name => event => {
    event.persist();
    setDocumentTypesOption(prevValue => ({
      ...prevValue,
      [name]: event.target.checked,
    }));
  };
  React.useEffect(() => {
    setQueryParams({
      recipientOption,
      documentTypes: Object.keys(documentTypesOption).filter(
        key => documentTypesOption[key],
      ),
      ...restQueryParams,
    });
  }, [documentTypesOption]);
  const documentsTypesButtons = Object.entries(documentTypesOption).map(
    ([key, value]) => ({
      checked: value,
      value: key,
      onChange: handleDocumentTypesOptionChange(key),
    }),
  );
  const documentsTypesButtonsLabels = {
    act: 'Акт',
    torg12: 'Торг12',
    utd: 'УПД',
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
                  value={recipientTypeOption}
                  onChange={handleRecipientTypeOptionChange}
                >
                  {recipientTypeOptionButtons.map(buttonOoptions => (
                    <FlexContainer
                      justifyContent="space-between"
                      key={buttonOoptions.value}
                    >
                      <FormControlLabel
                        label={buttonOoptions.label}
                        value={buttonOoptions.value}
                        control={
                          <Radio
                            checked={
                              recipientTypeOption === buttonOoptions.value
                            }
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
