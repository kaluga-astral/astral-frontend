import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import { DocumentIcon } from '@astral-frontend/icons';

import InputAdornment from '../InputAdornment';

import TextField from './TextField';

storiesOf('packages/components/TextField', module)
  .add('Default', () => (
    <TextField label="Email" helperText="enter valid email" />
  ))
  .add('With placeholder', () => (
    <TextField label="Phone" placeholder="Enter phone" />
  ))
  .add('With Icon', () => (
    <TextField
      label="With icon"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <DocumentIcon />
          </InputAdornment>
        ),
      }}
    />
  ));
