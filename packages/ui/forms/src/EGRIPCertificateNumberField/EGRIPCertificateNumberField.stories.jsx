/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '../Form';

import EGRIPCertificateNumberField from './EGRIPCertificateNumberField';

storiesOf('packages/forms/EGRIPCertificateNumberField', module).add(
  'default',
  () => (
    <Form onSubmit={values => console.log('onSubmit', values)}>
      {() => <EGRIPCertificateNumberField />}
    </Form>
  ),
);
