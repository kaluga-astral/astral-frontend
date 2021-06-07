/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { EditIcon } from '@astral-frontend/icons';

import Box from '../Box';

import Button from './Button';

storiesOf('packages/components/Button', module)
  .add('default', () => (
    <Box display="grid" gridAutoFlow="column" gridGap="20px">
      <Button>Text</Button>
      <Button variant="regular">Regular</Button>
      <Button variant="outlined">Outlined</Button>
    </Box>
  ))
  .add('Text', () => (
    <Box display="grid" gridAutoFlow="column" gridGap="20px">
      <Button>Text</Button>
      <Button variant="textBlock">TextBlock</Button>
      <Button disabled>Disabled</Button>
      <Button startIcon={<EditIcon />}>With Icon</Button>
      <Button disabled startIcon={<EditIcon />}>
        With Icon disabled
      </Button>
    </Box>
  ))
  .add('Regular', () => (
    <Box display="grid" gridAutoFlow="column" gridGap="20px">
      <Button variant="regular">Regular</Button>
      <Button variant="regularBlock">RegularBlock</Button>
      <Button disabled variant="regular">
        Disabled
      </Button>
      <Button startIcon={<EditIcon />} variant="regular">
        With Icon
      </Button>
      <Button disabled startIcon={<EditIcon />} variant="regular">
        With Icon disabled
      </Button>
    </Box>
  ))
  .add('Outlined', () => (
    <Box display="grid" gridAutoFlow="column" gridGap="20px">
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlinedBlock">OutlinedBlock</Button>
      <Button disabled variant="outlined">
        Disabled
      </Button>
      <Button startIcon={<EditIcon />} variant="outlined">
        With Icon
      </Button>
      <Button disabled startIcon={<EditIcon />} variant="outlined">
        With Icon disabled
      </Button>
    </Box>
  ));
