/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '../Form';

import OKATOField from './OKATOField';

storiesOf('packages/forms/OKATOField', module).add('default', () => (
  <Form onSubmit={values => console.log('onSubmit', values)}>
    {() => <OKATOField />}
  </Form>
));
