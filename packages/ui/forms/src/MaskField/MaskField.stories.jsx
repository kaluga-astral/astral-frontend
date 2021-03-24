/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '../Form';

import MaskField from './MaskField';

storiesOf('packages/forms/MaskField', module).add('default', () => (
  <Form onSubmit={values => console.log('onSubmit', values)}>
    {() => <MaskField name="test" mask="aa99**" label="Test" />}
  </Form>
));
