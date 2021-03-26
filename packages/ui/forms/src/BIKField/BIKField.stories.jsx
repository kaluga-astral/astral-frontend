/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '../Form';

import BIKField from './BIKField';

storiesOf('packages/forms/BIKField', module).add('default', () => (
  <Form onSubmit={values => console.log('onSubmit', values)}>
    {() => <BIKField />}
  </Form>
));
