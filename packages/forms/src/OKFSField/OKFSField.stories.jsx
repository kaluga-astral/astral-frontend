/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '../Form';

import OKFSField from './OKFSField';

storiesOf('packages/forms/OKFSField', module).add('default', () => (
  <Form onSubmit={values => console.log('onSubmit', values)}>
    {() => <OKFSField />}
  </Form>
));
