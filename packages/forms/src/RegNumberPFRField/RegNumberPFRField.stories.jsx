/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '../Form';

import RegNumberPFRField from './RegNumberPFRField';

storiesOf('packages/forms/RegNumberPFRField', module).add('default', () => (
  <Form onSubmit={values => console.log('onSubmit', values)}>
    {() => <RegNumberPFRField />}
  </Form>
));
