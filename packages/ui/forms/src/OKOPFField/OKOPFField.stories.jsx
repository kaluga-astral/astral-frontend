/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '../Form';

import OKOPFField from './OKOPFField';

storiesOf('packages/forms/OKOPFField', module).add('default', () => (
  <Form onSubmit={values => console.log('onSubmit', values)}>
    {() => <OKOPFField />}
  </Form>
));
