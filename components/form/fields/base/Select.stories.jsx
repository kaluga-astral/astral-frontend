import React from 'react';

import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import Select from './Select';

import Form from '../../Form';

storiesOf('form/fields/base', module)
  .add('primary', () => {
    const name = 'select';
    const variant = 'primary';
    const options = [
      { label: 'value 1', value: 1 },
      { label: 'value 2', value: 2 }
    ];

    return (
      <Form onSubmit={() => {}}>
        {() => <Select variant={variant} name={name} options={options} />}
      </Form>
    );
  }).add('secondary', () => {
    const name = 'select';
    const variant = 'secondary';
    const options = [
      { label: 'value 1', value: 1 },
      { label: 'value 2', value: 2 }
    ];

    return (
      <Form onSubmit={() => {}}>
        {() => <Select variant={variant} name={name} options={options} />}
      </Form>
    );
  });