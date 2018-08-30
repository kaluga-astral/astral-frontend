import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Button from './Button';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('Основные', () => (
  <Button disabled={boolean('disabled', false)} onClick={action('clicked')}>
    {text('children', 'Default text')}
  </Button>
));

stories.add('Альтернативные', () => (
  <Button color="secondary" disabled={boolean('disabled', false)} onClick={action('clicked')}>
    {text('children', 'Default text')}
  </Button>
));
