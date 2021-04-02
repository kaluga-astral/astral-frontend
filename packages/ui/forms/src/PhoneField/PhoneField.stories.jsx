/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '../Form';

import PhoneField from './PhoneField';

storiesOf('packages/forms/PhoneField', module).add('default', () => (
  <Form onSubmit={values => console.log('onSubmit', values)}>
    {() => <PhoneField alwaysShowMask />}
  </Form>
));
