import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from '../index';
import Header, {
  MainTitle,
} from './index';

storiesOf('Layouts/Dashboard', module).add('Header', () => (
  <Container>
    <Header>
      <MainTitle>
        Main Title
      </MainTitle>
    </Header>
  </Container>
));
