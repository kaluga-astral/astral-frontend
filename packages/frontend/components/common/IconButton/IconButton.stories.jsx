/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import SvgIcon from '../SvgIcon';

import IconButton from './IconButton';

storiesOf('IconButton', module)
  .add('default', () => (
    <IconButton>
      <SvgIcon>
        <path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </SvgIcon>
    </IconButton>
  ))
  .add('disabled', () => (
    <IconButton disabled>
      <SvgIcon>
        <path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </SvgIcon>
    </IconButton>
  ))
  .add('loading', () => (
    <IconButton loading>
      <SvgIcon>
        <path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </SvgIcon>
    </IconButton>
  ))
  .add('success', () => (
    <IconButton success>
      <SvgIcon>
        <path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </SvgIcon>
    </IconButton>
  ));
