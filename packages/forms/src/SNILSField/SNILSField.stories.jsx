/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '../Form';

import SNILSField from './SNILSField';

storiesOf('packages/forms/SNILSField', module).add('default', () => (
  <Form onSubmit={values => console.log('onSubmit', values)}>
    {() => <SNILSField />}
  </Form>
));
