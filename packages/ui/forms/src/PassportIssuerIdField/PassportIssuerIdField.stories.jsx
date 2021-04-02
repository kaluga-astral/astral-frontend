/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '../Form';

import PassportIssuerIdField from './PassportIssuerIdField';

storiesOf('packages/forms/PassportIssuerIdField', module).add('default', () => (
  <Form onSubmit={values => console.log('onSubmit', values)}>
    {() => <PassportIssuerIdField />}
  </Form>
));
