import React from 'react';
import { DocumentIcon } from '@astral-frontend/icons';

import InputAdornment from '../InputAdornment';
import Box from '../Box/Box';

import TextField from './TextField';

const args = {
  label: 'Text',
  helperText: 'Enter valid text',
  disabled: false,
  error: false,
};

export default {
  title: 'components/TextField',
  component: TextField,
  args,
};

export const Default = props => (
  <Box display="grid" gridGap="20px">
    <TextField {...props} />
    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <DocumentIcon />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  </Box>
);
