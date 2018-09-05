import React from 'react';
import { storiesOf } from '@storybook/react';

import Avatar from './Avatar';

storiesOf('Avatar', module)
  // .add('image', () => <Avatar alt="Gopher" src="/static/images/remy.jpg" />)
  // .add('icon', () => <Avatar></Avatar>)
  .add('letter', () => <Avatar>TU</Avatar>);
