/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '../Form';

import KPPField from './KPPField';

storiesOf('packages/forms/KPPField', module).add('default', () => (
  <Form onSubmit={values => console.log('onSubmit', values)}>
    {() => <KPPField />}
  </Form>
));
