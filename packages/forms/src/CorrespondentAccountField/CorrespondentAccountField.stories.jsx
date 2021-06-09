/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '../Form';

import CorrespondentAccountField from './CorrespondentAccountField';

storiesOf('packages/forms/CorrespondentAccountField', module).add(
  'default',
  () => (
    <Form onSubmit={values => console.log('onSubmit', values)}>
      {() => <CorrespondentAccountField />}
    </Form>
  ),
);
