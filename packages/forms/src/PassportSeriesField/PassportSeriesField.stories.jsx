/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '../Form';

import PassportSeriesField from './PassportSeriesField';

storiesOf('packages/forms/PassportSeriesField', module).add('default', () => (
  <Form onSubmit={values => console.log('onSubmit', values)}>
    {() => <PassportSeriesField />}
  </Form>
));
