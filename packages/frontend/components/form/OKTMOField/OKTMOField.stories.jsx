/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '../Form';

import OKTMOField from './OKTMOField';

storiesOf('packages/forms/OKTMOField', module).add('default', () => (
  <Form onSubmit={values => console.log('onSubmit', values)}>
    {() => <OKTMOField />}
  </Form>
));
